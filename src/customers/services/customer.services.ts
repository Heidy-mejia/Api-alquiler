import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customers.entity';
import { CreateCustomerDto } from '../dto/customer.dto';



@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private CustomerRepository: Repository<Customer>,
  ) {}

  async create(reateCustomerDto: CreateCustomerDto): Promise<Customer> {
    const Customer= this.CustomerRepository.create(reateCustomerDto);
    await this.CustomerRepository.save(Customer);
    return Customer;
  }

  findOne(id: number){
    return this.CustomerRepository.findOneBy({id})
}

    //mostrar todas las marcas
    findAll(){
      return   this.CustomerRepository.find({
          order: {id: 'ASC'},
      });
  }
  //eliminar un usuario
  async remove(id:number){
    const user =await this.findOne(id);
    await this.CustomerRepository.remove(user);
    return 'Cliente eliminado';
 }

  

 

  async update(id: number, cambios: CreateCustomerDto){
    const oldCustomer = await this.findOne(id);
    const updateCustomer= await this.CustomerRepository.merge(oldCustomer, cambios);
    return this.CustomerRepository.save(updateCustomer);
}
}

