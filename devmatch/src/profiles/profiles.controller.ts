import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles') //this is our route which is like this /profiles
export class ProfilesController {
  constructor(private ProfilesService: ProfilesService) {}
  @Get() //this is our get route
  findAll() {
    //as in the req url the query is always in string, so we must pass the string location inside query decorator then we are also settign the type of location as we are using ts
    return this.ProfilesService;
  }
  @Get(':id') //as the id is passed in url as param as :id
  findOne(@Param('id') id: String) {
    return this.ProfilesService.findOne(id);
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
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    //here we are using Delete method with function remove
    return {};
  }
}
