import { IsString, Length, IsNotEmpty, IsEmail } from 'class-validator';
export class AuthDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @Length(5, 10)
  pass: string;
}


export class CreateProfileDto {
  //here we are using class-validator inorder to validate that the name and description must be string and
  //the length of the name must be between 3 and 10
  //data transfer object
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
