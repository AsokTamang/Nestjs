import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { User } from 'src/profiles/entity/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { AuthDto } from './dto/auth';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) 
  private jwtService:JwtService
  ,private userRepo: Repository<User>) {}

  async isvalid(req: Request, bodyfield: AuthDto): Promise<string | void> {
    const { username, pass } = bodyfield;
    const existing = await this.userRepo.findOneBy({ username: username }); //here we are finding the user by the username
    if (!existing) {
      throw new NotFoundException('No user account exists under this username');
    }
    const validPW = await bcrypt.compare(pass, existing.password); //here we are using bcrypt inorder to compare the password entered by the user with the password inside the database
    if (!validPW) {
      throw new Error('Invalid password');
    }
    //using jwt method
     const {password,...data} = existing
     const payload=data
     const token=await this.jwtService.signAsync(payload);
    
    
    
    
    //using expression session
    //req.session.userId = existing.id; //if the user is logged in successfully then we provide the user's id in session of req as userId
    //return req.session.userId; //here if the user is authenticated then we must assign them a token for authorization
  }
}
