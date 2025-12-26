import { Controller, Get } from '@nestjs/common';

@Controller('profiles') //this is our route which is like this /profiles
export class ProfilesController {
  @Get()   //this is our get route
  findAll() {
    return [];
  }
}
