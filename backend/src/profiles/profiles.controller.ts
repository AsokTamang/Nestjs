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

  @Put('update/:id') //updating the profile based on id
  update(
    @Param('id') id: string,
    @Body()
    UpdateProfileDto: UpdateProfileDto, //here we are using the validation pipe on the req body of put method of this api
  ) {
    return this.ProfilesService.updateProfile(id, UpdateProfileDto);
  }
  @Delete('delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    //same here using the built-in pipe we are transforming the id passed through req url into uuid
    //here we are using Delete method with function remove
    this.ProfilesService.deleteOne(id);
  }
}
