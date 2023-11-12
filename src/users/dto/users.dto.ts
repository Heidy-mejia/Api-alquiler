import { IsString, IsNumber, IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  phone_number: number;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsArray({each:true})
  @IsString()
  @IsOptional()
  images?: string[];

  

  
}
