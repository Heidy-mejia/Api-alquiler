import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agreement } from '../entities/agreement.entity';
import { CreateAgreementDto } from '../dto/agreement.dto';




@Injectable()
export class AgreementService {
  constructor(
    @InjectRepository(Agreement)
    private AgreementRepository: Repository<Agreement>,
  ) {}

  async create(createAgreementDto: CreateAgreementDto): Promise<Agreement> {
    const Agreement= this.AgreementRepository.create(createAgreementDto);
    await this.AgreementRepository.save(Agreement);
    return Agreement;
  }

  findOne(id: number){
    return this.AgreementRepository.findOneBy({id})
}

    //mostrar todas las marcas
    findAll(){
      return   this.AgreementRepository.find({
          order: {id: 'ASC'},
      });
  }

  

 

  async update(id: number, cambios: CreateAgreementDto){
    const oldAgreement = await this.findOne(id);
    const updateAgreement= await this.AgreementRepository.merge(oldAgreement, cambios);
    return this.AgreementRepository.save(updateAgreement);
}
}

