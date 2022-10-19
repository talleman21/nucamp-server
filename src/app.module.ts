import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampsitesModule } from './campsites/campsites.module';
import { PartnersModule } from './partners/partners.module';
import { PromotionsModule } from './promotions/promotions.module';
import { CommentsModule } from './comments/comments.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [CampsitesModule, PartnersModule, PromotionsModule, CommentsModule, FeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
