
import { IsString, IsNumber, IsArray, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  Name: string;

  @IsString()
  @IsNotEmpty()
  Nationality: string;

  @IsNumber()
  @IsNotEmpty()
  Phone_number: number;

  @IsString()
  @IsNotEmpty()
  Email: string;


  @IsString()
  @IsNotEmpty()
  Civil_status: string;


  
}
