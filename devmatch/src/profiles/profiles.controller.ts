import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('profiles') //this is our route which is like this /profiles
export class ProfilesController {
  @Get() //this is our get route
  findAll(@Query('name') name: String) {
    //as in the req url the query is always in string, so we must pass the string location inside query decorator then we are also settign the type of location as we are using ts
    return [ {name}];
  }
 @Get(':id')  //as the id is passed in url as param as :id
 findOne(@Param('id') id:String){
  return [{id}]

 }
}
