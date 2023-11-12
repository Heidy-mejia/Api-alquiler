import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Property } from './properti.entity';


@Entity()
export class PropertiesImage {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', nullable: true })
  url: string;

  @ManyToOne(() => Property, (Property) => Property.images,{
    onDelete:'CASCADE'
  })
  properties: Property;

}