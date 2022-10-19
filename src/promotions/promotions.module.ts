import { Module } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { PromotionsController } from './promotions.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PromotionsController],
  providers: [PromotionsService,PrismaService]
})
export class PromotionsModule {}
