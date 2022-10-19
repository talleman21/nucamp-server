import { Module } from '@nestjs/common';
import { CampsitesService } from './campsites.service';
import { CampsitesController } from './campsites.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CampsitesController],
  providers: [CampsitesService,PrismaService]
})
export class CampsitesModule {}
