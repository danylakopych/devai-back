import { Test, TestingModule } from '@nestjs/testing';
import { GptIntegrationService } from './gpt-integration.service';

describe('GptIntegrationService', () => {
  let service: GptIntegrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GptIntegrationService],
    }).compile();

    service = module.get<GptIntegrationService>(GptIntegrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
