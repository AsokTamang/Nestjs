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
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from './profiles/entity/profile.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //here we are making the config service global which means no need to import this config service manually on every module
      //where we use the credentials of .env file
      envFilePath: '.env.development.local',
    }),
     ProfilesModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService], //here we are using configService inside typeorm
      async useFactory(config: ConfigService) {
        return {
          type: 'mysql',
          host: 'localhost',
          username: config.get('username'),
          password: config.get('password'),
          port: 3306,
          database: 'users',
          entities: [User],
          synchronize: false,
        };
      },
    })
  ],
  controllers: [AppController, ProfilesController, AuthController],
  providers: [AppService, ProfilesService, AuthService],
})
export class AppModule {}
