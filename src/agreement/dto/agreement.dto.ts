
import { IsString, IsNumber, IsArray, IsNotEmpty } from 'class-validator';

export class CreateAgreementDto {
  @IsNumber()
  @IsNotEmpty()
  Start_date: number;

  @IsNumber()
  @IsNotEmpty()
  End_date: number;

  @IsString()
  @IsNotEmpty()
  Rental_amount: string;


  
}
