//the profile service consists of all the logics
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/profile.entity';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable() //here the decorator injectable means this class consisting various methods or factories can be injected in various parts of this application
export class ProfilesService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findALL() {
    const all = await this.userRepo.find(); //this returns the array of objects
    const final = all.map(({ password, ...data }) => data); //here we are exluding the password
    return final; //this retrieves all the data information from database
  }
  async findOne(id: string) {
    const existing = await this.userRepo.findOneBy({ id: Number(id) }); //as the passed id is in string through req url , we are converting the passed id into Number
    //as the id is a primary key

    if (existing) {
      const { password, ...data } = existing;
      return data; //as the password is secret , we mustnot return the password to the outer world
    }
    throw new NotFoundException();
  }
  async create(body: CreateProfileDto) {
    //this req comes from the controller
    const { firstName, lastName, username, password } = body;
    const hassedPW = await bcrypt.hash(password, 10);
    const newData = { firstName, lastName, username };
    await this.userRepo.insert({ ...newData, password: hassedPW }); //here we are inserting the new user
    return 'User added successfully';
  }
  async updateProfile(id: string, body: UpdateProfileDto) {
    const profile = await this.findOne(id);
    if (!profile) {
      throw new NotFoundException('Profile not found!');
    }
    const { firstName, lastName, username, password } = body;
    const hassedPW = await bcrypt.hash(password, 10);
    await this.userRepo.update(
      { id: Number(id) },
      { firstName, lastName, username, password: hassedPW },
    );
    return 'User updated successfully';
  }
  async deleteOne(id: string) {
    const existing = await this.findOne(id);
    if (existing) {
      this.userRepo.delete({ id: Number(id) });
    }
  }
}
