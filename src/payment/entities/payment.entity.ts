
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Payment_date: number;

  @Column()
  Payment_amount: number;

  @Column()
  Payment_status: string;
    

  // Define otras columnas relevantes
}
