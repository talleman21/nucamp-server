import { Module } from '@nestjs/common';
import { CampsitesService } from './campsites.service';
import { CampsitesController } from './campsites.controller';

@Module({
  controllers: [CampsitesController],
  providers: [CampsitesService]
})
export class CampsitesModule {}
