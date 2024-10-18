import { Test, TestingModule } from '@nestjs/testing';
import { ProjectStageController } from './project-stage.controller';

describe('ProjectStageController', () => {
  let controller: ProjectStageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectStageController],
    }).compile();

    controller = module.get<ProjectStageController>(ProjectStageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
