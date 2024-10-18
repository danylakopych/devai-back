import { Test, TestingModule } from '@nestjs/testing';
import { ProjectStageService } from './project-stage.service';

describe('ProjectStageService', () => {
  let service: ProjectStageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectStageService],
    }).compile();

    service = module.get<ProjectStageService>(ProjectStageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
