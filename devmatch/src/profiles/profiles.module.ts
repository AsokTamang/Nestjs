import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { User } from './entity/profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([User])],     //here now with this import we can use User entity from our profile module service
  controllers: [ProfilesController],
  providers: [ProfilesService],
  exports:[ProfilesService]  //here we are making this profilService sharable across our entire application'
  //and when we use this kind of exporting of service from the module, same instance of service is shared making less memory usage and prevention of unusual state change if this instance of service is used by
  //other multiple modules in an app
})
export class ProfilesModule {}
