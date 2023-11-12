import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,DataSource } from 'typeorm';
import { Property } from '../entities/properti.entity';
import { CreatePropertyDto } from '../dto/properti.dto';
import { PropertiesImage } from '../entities/properties-image.entity';


@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
    @InjectRepository(PropertiesImage)
    private propertiesImageRepo: Repository<PropertiesImage>,

    private readonly dataSource: DataSource,
  ) {}

  async create (PropertyDto: CreatePropertyDto){
    const {images = [], ...detailProperty} = PropertyDto;
    const Property = await this.propertyRepository.create({
        ...detailProperty,
        images:images.map((image) => this.propertiesImageRepo.create({url:image}))
    })

    await this.propertyRepository.save(Property);
    return Property;
  }

 
  findOne(id: number) {
    return this.propertyRepository.findOne({
      where: { id },
      relations: {
        images: true,
        autor: true,
        agreement: true,
        category: true,
        customer: true,
        payment: true,
      },
    });
  }

  findAll() {
    return this.propertyRepository.find({
      order: { id: 'ASC' },
      relations: {
        images: true,
        autor: true,
        agreement: true,
        category: true,
        customer: true,
        payment: true,
      },
    });
  }

 
   //eliminar un registro
   async remove(id:number){
    const Property =await this.findOne(id);
    await this.propertyRepository.remove(Property);
    return 'Propiedad eliminadad';
}

  

 

  async update(id: number, propertyDto: CreatePropertyDto){
    const {images, ...updateAll} = propertyDto
    const Property = await this.propertyRepository.preload({
        id:id,
        ... updateAll
    });

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    if(images){
        await queryRunner.manager.delete(PropertiesImage, {user: {id}});

        Property.images = images.map((image)=>
            this.propertiesImageRepo.create({url: image}),
        )

    }else{
        Property.images =await this.propertiesImageRepo.findBy({ properties: {id}});
    }

    await queryRunner.manager.save(Property);

    await queryRunner.commitTransaction();
    await queryRunner.release();

    return Property;
}
}

