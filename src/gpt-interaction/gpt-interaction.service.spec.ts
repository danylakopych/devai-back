import { Test, TestingModule } from '@nestjs/testing';
import { GptInteractionService } from './gpt-interaction.service';

describe('GptInteractionService', () => {
  let service: GptInteractionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GptInteractionService],
    }).compile();

    service = module.get<GptInteractionService>(GptInteractionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
