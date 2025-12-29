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
  ParseUUIDPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
@Controller('profiles') //this is our route which is like this /profiles
export class ProfilesController {
  constructor(private ProfilesService: ProfilesService) {} //here as the data variable in profileservice is private, we are using constructor inorder to access this private data var
  @Get() //this is our get route
  findAll() {
    //as in the req url the query is always in string, so we must pass the string location inside query decorator then we are also settign the type of location as we are using ts
    return this.ProfilesService.findALL();
  }
  @Get(':id') //as the id is passed in url as param as :id
  findOne(@Param('id') id: string) {
    //here we are converting the id from req param to uuid using built-in pipe
    return this.ProfilesService.findOne(id);
  }
  @Post() //here we are implementing the post method
  create(@Body() body: CreateProfileDto) {
    //here we are assigning that the name and the description passed from the req body must be like the name and description as in dto
    //if any bad req is made then nest automatically throws error
    try {
      return this.ProfilesService.create(body);
    } catch (error) {
      return error.message;
    }
  }
  @Put(':id') //updating the profile based on id
  update(
    @Param('id') id: string,
    @Body()
    UpdateProfileDto: UpdateProfileDto, //here we are using the validation pipe on the req body of put method of this api
  ) {
    return this.ProfilesService.updateProfile(id, UpdateProfileDto);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    //same here using the built-in pipe we are transforming the id passed through req url into uuid
    //here we are using Delete method with function remove
    return this.ProfilesService.deleteOne(id);
  }
}
