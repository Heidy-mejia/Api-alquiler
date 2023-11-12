
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Agreement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Start_date: number;

  @Column()
  End_date: number;

  @Column()
  Rental_amount: string;

 


}
