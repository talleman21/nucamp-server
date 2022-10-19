import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CampsitesService } from './campsites.service';
import { CreateCampsiteDto } from './dto/create-campsite.dto';

@Controller('campsites')
export class CampsitesController {
  constructor(private readonly campsitesService: CampsitesService) {}

  @Post()
  create(@Body() createCampsiteDto: CreateCampsiteDto) {
    return this.campsitesService.create(createCampsiteDto);
  }

  @Get()
  findAll() {
    return this.campsitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campsitesService.findOne(id);
  }

  @Put(':id')
  update() {
    return 'put route not supported on /campsites'
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "delete route not supported on /campsites"
  }
}
