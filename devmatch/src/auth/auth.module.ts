import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ProfilesModule } from 'src/profiles/profiles.module';



@Module({
  imports:[ProfilesModule],   //here typeORM.forFeature enable this auth module to use the User entity
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
