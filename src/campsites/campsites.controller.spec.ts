import { Test, TestingModule } from '@nestjs/testing';
import { CampsitesController } from './campsites.controller';
import { CampsitesService } from './campsites.service';

describe('CampsitesController', () => {
  let controller: CampsitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampsitesController],
      providers: [CampsitesService],
    }).compile();

    controller = module.get<CampsitesController>(CampsitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
