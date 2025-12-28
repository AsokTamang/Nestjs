//the profile service consists of all the logics
import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable() //here the decorator injectable means this class consisting various methods or factories can be injected in various parts of this application
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      description: `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests. Bonus points if you can debug my issues while we pair program over coffee. Let’s commit to something beautiful together.`,
    },
    {
      id: randomUUID(),
      name: 'Jasper Quinn',
      description: `Seeking a partner in crime to compile my heart. Must be comfortable with the terminal because I only speak fluent bash. Swipe right if you can appreciate a good kernel panic every now and then.`,
    },
    {
      id: randomUUID(),
      name: 'Leo Park',
      description: `You think you know VIM? Try Neovim. I'll make your modal dreams come true. Want to escape the matrix and explore the perfect keyboard shortcut for love?`,
    },
  ];
  findALL() {
    return this.profiles; //we can return the private data only using this.
  }
  findOne(id: String) {
    const existing  = this.profiles.find((profile) => profile.id === id);
    if (existing){
      return existing
    }
    throw new NotFoundException(); 
  }
  create(body: CreateProfileDto) {
    //this req comes from the controller
    const { name, description } = body;
    const newData = { id: randomUUID(), name, description };
    this.profiles.push(newData);
    return newData;
  }
  updateProfile(id: string, body: UpdateProfileDto) {
   const profile = this.findOne(id);
   if (!profile){
    throw new NotFoundException('Profile not found!');
   }
   Object.assign(profile,body)  //here we are updating the info using id and body 
   
    return profile;
  }
  deleteOne(id:string){
    const profileIndex = this.profiles.findIndex((profile)=>profile.id === id);
    if (profileIndex>-1){   //if there is no any element having given provided id then the findIndex method returns -1, which is why we are comparing with -1 here
     this.profiles.splice(profileIndex,1)  //here we are removing one item from the given profileIndex from the given array
     return
    }
    return
   
  }
}
