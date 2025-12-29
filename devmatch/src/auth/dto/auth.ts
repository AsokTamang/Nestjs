import { IsString,Length
 } from "class-validator"
export class AuthDto {
    @IsString()
    username:string
    @IsString()
    @Length(5,10)
    password:string
}