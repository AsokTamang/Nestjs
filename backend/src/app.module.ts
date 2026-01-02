import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from './profiles/entity/profile.entity';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth.gaurd';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    JwtModule,
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    ConfigModule.forRoot({
      isGlobal: true, //here we are making the config service global which means no need to import this config service manually on every module
      //where we use the credentials of .env file   //so we can easily access this credential using process.env.
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
          synchronize: true,   //here we are using synchornize true inorder to create table if the table doesnot exist
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService,   //here we are making this authgaurd class global which means all the endpoints of our app will be protected 
     {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }
  ],
})
export class AppModule {}
