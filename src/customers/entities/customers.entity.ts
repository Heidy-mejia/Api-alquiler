
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Nationality: string;

  @Column()
  Phone_number: number;

  @Column()
  Civil_status: string;
    


}
