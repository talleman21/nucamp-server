import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCampsiteDto } from './dto/create-campsite.dto';
import { UpdateCampsiteDto } from './dto/update-campsite.dto';

@Injectable()
export class CampsitesService {
  constructor(private readonly prisma:PrismaService){}

  create(createCampsiteDto: CreateCampsiteDto) {
    return "Post request not allowed on /campsites"
    // return this.prisma.campsite.create({data:createCampsiteDto})
  }

  findAll() {
    return this.prisma.campsite.findMany()
  }

  findOne(id: string) {
    return this.prisma.campsite.findUnique({where:{id}})
  }

  update(id: string, updateCampsiteDto: UpdateCampsiteDto) {
    return `This action updates a #${id} campsite`;
  }

  remove(id: string) {
    return `This action removes a #${id} campsite`;
  }
}
