import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from '../entities/payment.entity';
import { CreatePaymentDto } from '../dto/payment.dto';




@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const Payment = this.paymentRepository.create(createPaymentDto);
    await this.paymentRepository.save(Payment);
    return Payment;
  }

  findOne(id: number){
    return this.paymentRepository.findOneBy({id})
}

    //mostrar todas las marcas
    findAll(){
      return   this.paymentRepository.find({
          order: {id: 'ASC'},
      });
  }

  

 

  async update(id: number, cambios: CreatePaymentDto){
    const oldPayment = await this.findOne(id);
    const updatePayment= await this.paymentRepository.merge(oldPayment , cambios);
    return this.paymentRepository.save(updatePayment);
}
}

