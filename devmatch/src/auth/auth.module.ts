import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ProfilesModule } from 'src/profiles/profiles.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports:[ProfilesModule,
     JwtModule.register({    //here we are registering the jwtmodule in our auth module so that we can use jwtService to generate the jwt when the login is successful
      global: true,
      secret: process.env.secret,
      signOptions: { expiresIn: '1d' },   //here we are making this token available for 1d
    }),
  ],   //here typeORM.forFeature enable this auth module to use the User entity
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
