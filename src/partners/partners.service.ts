import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

@Injectable()
export class PartnersService {

  constructor(private readonly prisma:PrismaService){}

  create(createPartnerDto: CreatePartnerDto) {
    return this.prisma.partner.create({data:createPartnerDto})
  }

  findAll() {
    return this.prisma.partner.findMany()
  }

  findOne(id: string) {
    return this.prisma.partner.findUnique({where:{id}})
  }
}
