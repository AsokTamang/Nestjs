import { Controller, Get,HttpCode, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from 'auth.gaurd';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard)  //only the authorized users who have signed in succcessfully can get this data details or can access this endpoint
  @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  @HttpCode(201)
  addSomething():string{
    return  this.appService.addSomething()
  }

}
