
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Agreement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_date: number;

  @Column()
  end_date: number;

  @Column()
  rental_amount: string;


 


}
