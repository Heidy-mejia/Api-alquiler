
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserImage } from './user-image.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone_number: number;

  @Column()
  password: string;

  @Column()
  email: string;
  
  @OneToMany(() => UserImage, (userImage) => userImage.user, {
    cascade : true
  })
  images?:UserImage[];
}

    
    
    

 
