import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { ProfilesService } from './profiles/profiles.service';
import { ProfilesController } from './profiles/profiles.controller';

@Module({
  imports: [ProfilesModule],
  controllers: [AppController,ProfilesController],
  providers: [AppService, ProfilesService],
})
export class AppModule {}
