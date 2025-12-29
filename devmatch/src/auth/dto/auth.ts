import { IsString, Length, IsNotEmpty, IsEmail } from 'class-validator';
export class AuthDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 10)
  pass: string;
}
