import { IsString, IsNumber, IsArray, IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @IsNotEmpty()
  Payment_date: number;

  @IsNumber()
  @IsNotEmpty()
  Payment_amount: number;

  @IsString()
  @IsNotEmpty()
  Payment_status: string;

  
}
