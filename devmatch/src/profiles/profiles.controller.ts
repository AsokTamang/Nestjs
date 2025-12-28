import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
@Controller('profiles') //this is our route which is like this /profiles
export class ProfilesController {
  constructor(private ProfilesService: ProfilesService) {}  //here as the data variable in profileservice is private, we are using constructor inorder to access this private data var
  @Get() //this is our get route
  findAll() {
    //as in the req url the query is always in string, so we must pass the string location inside query decorator then we are also settign the type of location as we are using ts
    return this.ProfilesService.findALL();
  }
  @Get(':id') //as the id is passed in url as param as :id
  findOne(@Param('id') id: String) {
     return this.ProfilesService.findOne(id);
  }
  @Post() //here we are implementing the post method
  create(@Body() body: CreateProfileDto) {
    //here we are assigning that the name and the description passed from the req body must be like the name and description as in dto
    //if any bad req is made then nest automatically throws error
    return this.ProfilesService.create(body);
  }
  @Put(':id') //updating the profile based on id
  update(@Param('id') id: string, @Body() UpdateProfileDto: UpdateProfileDto) {
    return this.ProfilesService.updateProfile(id, UpdateProfileDto);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)   
  remove(@Param('id') id: string):void {
    //here we are using Delete method with function remove
    return this.ProfilesService.deleteOne(id);
  }
}
