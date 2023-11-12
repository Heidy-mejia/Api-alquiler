
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customers.entity';
import { customerController } from './controller/customers.controller';
import { CustomerService } from './services/customer.services';


@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers:[customerController],
  providers: [CustomerService],
  exports: [TypeOrmModule,CustomerModule],
})
export class CustomerModule {}
