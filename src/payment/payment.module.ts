
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { PaymentController } from './controller/payment.controller';
import { PaymentService } from './services/payment.servive';




@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  controllers:[PaymentController],
  providers: [PaymentService],
  exports: [TypeOrmModule,PaymentModule],
})
export class PaymentModule {}
