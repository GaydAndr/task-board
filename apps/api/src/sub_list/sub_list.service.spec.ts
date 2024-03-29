import { Test, TestingModule } from '@nestjs/testing';
import { SubListService } from './sub_list.service';

describe('SubListService', () => {
  let service: SubListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubListService],
    }).compile();

    service = module.get<SubListService>(SubListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
