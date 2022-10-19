import { Injectable } from '@nestjs/common';
import { CreateCampsiteDto } from './dto/create-campsite.dto';
import { UpdateCampsiteDto } from './dto/update-campsite.dto';

@Injectable()
export class CampsitesService {
  create(createCampsiteDto: CreateCampsiteDto) {
    return 'This action adds a new campsite';
  }

  findAll() {
    return `This action returns all campsites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campsite`;
  }

  update(id: number, updateCampsiteDto: UpdateCampsiteDto) {
    return `This action updates a #${id} campsite`;
  }

  remove(id: number) {
    return `This action removes a #${id} campsite`;
  }
}
