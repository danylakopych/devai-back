import { Test, TestingModule } from '@nestjs/testing';
import { ProjectPhaseController } from './project-phase.controller';

describe('ProjectPhaseController', () => {
  let controller: ProjectPhaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectPhaseController],
    }).compile();

    controller = module.get<ProjectPhaseController>(ProjectPhaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
