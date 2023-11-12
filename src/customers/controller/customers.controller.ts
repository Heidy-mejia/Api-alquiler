import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, Patch } from '@nestjs/common';
import { CustomerService } from '../services/customer.services';

import { Customer } from '../entities/customers.entity';
import { CreateCustomerDto } from '../dto/customer.dto';


@Controller('customer')
export class customerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.customerService.findOne(id);
    
  }

  @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()CreateCustomerDto :CreateCustomerDto,
        
    )
    {
        return this.customerService.update(id, CreateCustomerDto)
    }
}

 

