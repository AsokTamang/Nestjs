import { Injectable } from '@nestjs/common';
import { ProfilesService } from 'src/profiles/profiles.service';

@Injectable()
export class AuthService {
    constructor(private profileService:ProfilesService){
    }
    
    isvalid(username:string,password:string){
       return this.profileService.isValid(username,password)

    }


}
