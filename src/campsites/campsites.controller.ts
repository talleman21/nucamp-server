import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampsitesService } from './campsites.service';
import { CreateCampsiteDto } from './dto/create-campsite.dto';
import { UpdateCampsiteDto } from './dto/update-campsite.dto';

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
    return this.campsitesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampsiteDto: UpdateCampsiteDto) {
    return this.campsitesService.update(+id, updateCampsiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campsitesService.remove(+id);
  }
}
