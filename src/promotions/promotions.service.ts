import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';

@Injectable()
export class PromotionsService {

  constructor(private readonly prisma:PrismaService){}

  create(createPromotionDto: CreatePromotionDto) {
    return this.prisma.promotion.create({data:createPromotionDto})
  }

  findAll() {
    return this.prisma.promotion.findMany()
  }

  findOne(id: string) {
    return this.prisma.promotion.findUnique({where:{id}})
  }
}
