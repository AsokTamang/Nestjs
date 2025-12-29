import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ProfilesModule } from 'src/profiles/profiles.module';
import { User } from 'src/profiles/entity/profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[ProfilesModule,TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
