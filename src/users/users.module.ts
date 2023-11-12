
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { UserController } from './controller/user.controller';
import { UserService } from './services/user.services';
import { UserImage } from './entities/user-image.entity';



@Module({
  imports: [TypeOrmModule.forFeature([User,UserImage])],
  controllers:[UserController],
  providers: [UserService],
  exports: [TypeOrmModule,UserModule],
})
export class UserModule {}
