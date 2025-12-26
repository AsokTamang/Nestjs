import { Controller, Get, Query } from '@nestjs/common';

@Controller('profiles') //this is our route which is like this /profiles
export class ProfilesController {
  @Get() //this is our get route
  findAll(@Query('location') location: string) {
    //as in the req url the query is always in string, so we must pass the string location inside query decorator then we are also settign the type of location as we are using ts
    return [{ location }];
  }
}
