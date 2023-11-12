
import { IsString, IsNumber, IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAgreementDto {
  @IsNumber()
  @IsNotEmpty()
  start_date: number;

  @IsNumber()
  @IsNotEmpty()
  end_date: number;

  @IsString()
  @IsNotEmpty()
  rental_amount: string;

 

  


  
}
