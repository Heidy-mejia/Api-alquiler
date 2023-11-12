
import { Agreement } from 'src/agreement/entities/agreement.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Customer } from 'src/customers/entities/customers.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { User } from 'src/users/entities/users.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany,ManyToOne,JoinColumn } from 'typeorm';
import { PropertiesImage } from './properties-image.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  price: number;

  @Column()
  size: string;

  @Column()
  rentalPrice: string;

  @Column()
  availabilityDate: number;

  

  

  
  @ManyToOne(()=> User)
  @JoinColumn({
    name:'user_id',
    referencedColumnName:'id'

  })
  autor:User;

  @ManyToOne(()=> Agreement)
  @JoinColumn({
    name:'agreement_id',
    referencedColumnName:'id'

  })
  agreement:Agreement;

  @ManyToOne(()=> Category)
  @JoinColumn({
    name:'category_id',
    referencedColumnName:'id'

  })
  category:Category;

  @ManyToOne(()=> Customer)
  @JoinColumn({
    name:'customer_id',
    referencedColumnName:'id'

  })
  customer:Customer;

  @ManyToOne(()=> Payment)
  @JoinColumn({
    name:'payment_id',
    referencedColumnName:'id'

  })
  payment:Payment;

  @OneToMany(() => PropertiesImage, (PropertiesImage) => PropertiesImage.properties, {
    cascade : true
  })
  images?:PropertiesImage[];

}
