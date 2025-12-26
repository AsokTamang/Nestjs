import { Body, Controller, Get, Param, Post, Query, Put } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles') //this is our route which is like this /profiles
export class ProfilesController {
  @Get() //this is our get route
  findAll(@Query('name') name: String) {
    //as in the req url the query is always in string, so we must pass the string location inside query decorator then we are also settign the type of location as we are using ts
    return [{ name }];
  }
  @Get(':id') //as the id is passed in url as param as :id
  findOne(@Param('id') id: String) {
    return [{ id }];
  }
  @Post() //here we are implementing the post method
  create(@Body() CreateProfileDto: CreateProfileDto) {
    //here we are assigning that the name and the description passed from the req body must be like the name and description as in dto
    //if any bad req is made then nest automatically throws error
    return [
      {
        name: CreateProfileDto.name,
        description: CreateProfileDto.description,
      },
    ];
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() UpdateProfileDto: UpdateProfileDto) {
    return {
      id,
      name: UpdateProfileDto.name,
      description: UpdateProfileDto.description,
    };
  }
}
