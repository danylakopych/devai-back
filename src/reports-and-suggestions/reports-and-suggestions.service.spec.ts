import { Test, TestingModule } from '@nestjs/testing';
import { ReportsAndSuggestionsService } from './reports-and-suggestions.service';

describe('ReportsAndSuggestionsService', () => {
  let service: ReportsAndSuggestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportsAndSuggestionsService],
    }).compile();

    service = module.get<ReportsAndSuggestionsService>(
      ReportsAndSuggestionsService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
