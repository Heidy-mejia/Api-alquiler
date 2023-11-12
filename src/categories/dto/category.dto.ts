
import { IsString, IsNumber, IsArray, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  Name_category_casa: string;

  @IsString()
  @IsNotEmpty()
  Description: string;


  
}
