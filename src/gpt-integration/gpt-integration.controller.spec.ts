import { Test, TestingModule } from '@nestjs/testing';
import { GptIntegrationController } from './gpt-integration.controller';

describe('GptIntegrationController', () => {
  let controller: GptIntegrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GptIntegrationController],
    }).compile();

    controller = module.get<GptIntegrationController>(GptIntegrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
