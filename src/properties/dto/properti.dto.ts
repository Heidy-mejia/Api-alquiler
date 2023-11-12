
import { IsString, IsNumber, IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;


  @IsString()
  @IsNotEmpty()
  size: string;

  @IsString()
  @IsNotEmpty()
  rentalprice: string;

  @IsNumber()
  @IsNotEmpty()
  availabilityDate: number;

  @IsArray({each:true})
  @IsString()
  @IsOptional()
  images?: string[];


  
}
