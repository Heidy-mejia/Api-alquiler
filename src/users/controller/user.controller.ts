import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, Patch } from '@nestjs/common';
import { UserService } from '../services/user.services';
import { CreateUserDto } from '../dto/users.dto';
import { User } from '../entities/users.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.userService.findOne(id);
    
  }
  @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.userService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createUserDto :CreateUserDto,
        
    )
    {
        return this.userService.update(id, createUserDto)
    }
}

 

