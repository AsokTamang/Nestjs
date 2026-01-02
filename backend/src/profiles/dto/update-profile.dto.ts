import { IsString, Length, IsEmail, IsNotEmpty } from 'class-validator';
export class UpdateProfileDto {
  @Length(3, 10)
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @Length(5, 8)
  password: string;
}
