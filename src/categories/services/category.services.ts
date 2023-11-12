import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto } from '../dto/category.dto';



@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private CategoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const Category= this.CategoryRepository.create(createCategoryDto);
    await this.CategoryRepository.save(Category);
    return Category;
  }

  findOne(id: number){
    return this.CategoryRepository.findOneBy({id})
}

    //mostrar todas las marcas
    findAll(){
      return   this.CategoryRepository.find({
          order: {id: 'ASC'},
      });
  }

  

 

  async update(id: number, cambios: CreateCategoryDto){
    const oldCategory = await this.findOne(id);
    const updateCategory= await this.CategoryRepository.merge(oldCategory, cambios);
    return this.CategoryRepository.save(updateCategory);
}
}

