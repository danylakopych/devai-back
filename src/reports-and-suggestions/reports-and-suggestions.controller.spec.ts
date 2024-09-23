import { Test, TestingModule } from '@nestjs/testing';
import { ReportsAndSuggestionsController } from './reports-and-suggestions.controller';

describe('ReportsAndSuggestionsController', () => {
  let controller: ReportsAndSuggestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportsAndSuggestionsController],
    }).compile();

    controller = module.get<ReportsAndSuggestionsController>(
      ReportsAndSuggestionsController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
