import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { ProfilesService } from './profiles/profiles.service';
import { ProfilesController } from './profiles/profiles.controller';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProfilesModule, AuthModule, ConfigModule.forRoot({
    isGlobal:true,   //here we are making the config service global which means no need to import this config service manually on every module
    //where we use the credentials of .env file
    envFilePath:'.env.development.local'
  })],
  controllers: [AppController, ProfilesController, AuthController],
  providers: [AppService, ProfilesService, AuthService],
})
export class AppModule {}
