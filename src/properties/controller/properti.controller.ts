import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, Patch } from '@nestjs/common';
import { PropertiesService } from '../services/properti.services';
import { Property } from '../entities/properti.entity';
import { CreatePropertyDto } from '../dto/properti.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  async create(@Body() createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.propertiesService.create(createPropertyDto);
  }

  @Get()
  async findAll(): Promise<Property[]> {
    return this.propertiesService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.propertiesService.findOne(id);
    
  }

  @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()CreatePropertyDto :CreatePropertyDto,
        
    )
    {
        return this.propertiesService.update(id, CreatePropertyDto)
    }
}

 

