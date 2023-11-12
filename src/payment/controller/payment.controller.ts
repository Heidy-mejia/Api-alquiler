import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, Patch } from '@nestjs/common';
import { PaymentService } from '../services/payment.servive';
import { CreatePaymentDto } from '../dto/payment.dto';
import { Payment } from '../entities/payment.entity';


@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async create(@Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.paymentService.create(createPaymentDto);
  }

  @Get()
  async findAll(): Promise<Payment[]> {
    return this.paymentService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.paymentService.findOne(id);
    
  }
  @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.paymentService.remove(id);
    }
  

  @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()CreatePaymentDto :CreatePaymentDto,
        
    )
    {
        return this.paymentService.update(id, CreatePaymentDto)
    }
}

 

