import { Test, TestingModule } from '@nestjs/testing';
import { SubListController } from './sub_list.controller';
import { SubListService } from './sub_list.service';

describe('SubListController', () => {
  let controller: SubListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubListController],
      providers: [SubListService],
    }).compile();

    controller = module.get<SubListController>(SubListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
