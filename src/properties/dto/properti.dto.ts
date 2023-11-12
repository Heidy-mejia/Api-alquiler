
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
  pentalprice: string;

  @IsNumber()
  @IsNotEmpty()
  AvailabilityDate: number;

  @IsArray({each:true})
  @IsString()
  @IsOptional()
  images?: string[];


  
}
