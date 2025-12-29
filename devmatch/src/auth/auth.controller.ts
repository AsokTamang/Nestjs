import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth';
@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('signin')
  Login(@Body() reqfield: AuthDto) {
    const { username, password } = reqfield;
    return this.AuthService.isvalid(username, password);
  }
}
