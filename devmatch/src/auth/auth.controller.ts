import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth';
import type { Request } from 'express';
import { Public } from 'publicConfigure';
@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}
  @Public() //making this endpoint public
  @Post('signin') // endpoint is /auth/signin
  Login(@Req() req: Request, @Body() reqfield: AuthDto) {
    //here the first req means the whole request where as the second reqfield means it is found in the body of req url

    return this.AuthService.isvalid(req, reqfield);
  }
}
