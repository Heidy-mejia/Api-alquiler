import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, Patch } from '@nestjs/common';
import { CategoryService } from '../services/category.services';
import { CreateCategoryDto } from '../dto/category.dto';
import { Category } from '../entities/category.entity';



@Controller('categories')
export class categoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.categoryService.findOne(id);
    
  }
  @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.categoryService.remove(id);
    }

  @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()CreateCategoryDto :CreateCategoryDto,
        
    )
    {
        return this.categoryService.update(id, CreateCategoryDto)
    }
}

 

