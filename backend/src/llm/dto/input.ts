import { IsString, IsNotEmpty } from 'class-validator';
export class inputDTO {
  @IsString()
  @IsNotEmpty()
  order: string;
 
}
