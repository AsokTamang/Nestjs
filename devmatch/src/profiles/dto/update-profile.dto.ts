import { IsString,Length,IsEmail } from "class-validator"
export class UpdateProfileDto {
    @Length(3, 10)
      @IsString()
      firstName: string; 
      @IsString()
      lastName: string;
      @IsEmail()
      username:string;
      @Length(5,8)
      password:string;
}