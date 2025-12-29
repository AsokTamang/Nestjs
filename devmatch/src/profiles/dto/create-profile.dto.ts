import { IsString, Length, IsEmail } from 'class-validator';
export class CreateProfileDto {
  //here we are using class-validator inorder to validate that the name and description must be string and
  //the length of the name must be between 3 and 10
  //data transfer object
  @Length(3, 10)
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  username: string;
  @Length(5, 8)
  password: string;
}
