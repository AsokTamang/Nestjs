import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { User } from 'src/profiles/entity/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async isvalid(username: string, password: string): Promise<string | void> {
    const existing = await this.userRepo.findOneBy({ username: username }); //here we are finding the user by the username
    if (!existing) {
      throw new NotFoundException('No user account exists under this username');
    }
    const validPW = await bcrypt.compare(password, existing.password); //here we are using bcrypt inorder to compare the password entered by the user with the password inside the database
    if (!validPW) {
      throw new Error('Invalid password');
    }
    return 'user logged in'; //here if the user is authenticated then we must assign them a token for authorization
  }
}
