import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,DataSource } from 'typeorm';
import { CreateUserDto } from '../dto/users.dto';
import { User } from '../entities/users.entity';
import { UserImage } from '../entities/user-image.entity';
import { LoginUserDto } from '../dto/login-user.dto';
import * as bcrypt from 'bcrypt'



@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    
    @InjectRepository(UserImage)
    private userImageRepo: Repository<UserImage>,

    private readonly dataSource: DataSource,
  ) {}

  async create (createUserDto: CreateUserDto){
    const {images = [], password, ...detailUser} = createUserDto;
    const user = await this.userRepository.create({
        ...detailUser,
        password: bcrypt.hashSync(password, 10),
        images:images.map((image) => this.userImageRepo.create({url:image}))
    })

        await this.userRepository.save(user);
        return user;
  }

    async login(login:LoginUserDto){
        const { password, email} = login;
        const user = await this.userRepository.findOne({
            where: {email},
            select:{password:true,email:true},
        });

        if(!user){
            throw new UnauthorizedException('Credenciales no validas')
        }

        if(!bcrypt.compareSync(password, user.password)){
            throw new UnauthorizedException('Credenciales no validas, password incorrecta')
        }

        return user;
    }

  findOne(id: number){
    return this.userRepository.findOneBy({id})
  }

    //mostrar todas las marcas
    findAll(){
      return   this.userRepository.find({
          order: {id: 'ASC'},
      });
  }
  //eliminar un usuario
  async remove(id:number){
    const user =await this.findOne(id);
    await this.userRepository.remove(user);
    return 'Usuario eliminado';
 }

  

 

  async update(id: number, userDto: CreateUserDto){
    const {images, ...updateAll} = userDto
    const user = await this.userRepository.preload({
        id:id,
        ... updateAll
    });

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    if(images){
        await queryRunner.manager.delete(UserImage, {user: {id}});

        user.images = images.map((image)=>
            this.userImageRepo.create({url: image}),
        )

    }else{
        user.images =await this.userImageRepo.findBy({ user: {id}});
    }

    await queryRunner.manager.save(user);

    await queryRunner.commitTransaction();
    await queryRunner.release();

    return user;
}
}

