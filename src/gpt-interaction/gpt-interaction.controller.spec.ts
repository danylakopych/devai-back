import { Test, TestingModule } from '@nestjs/testing';
import { GptInteractionController } from './gpt-interaction.controller';

describe('GptInteractionController', () => {
  let controller: GptInteractionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GptInteractionController],
    }).compile();

    controller = module.get<GptInteractionController>(GptInteractionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
