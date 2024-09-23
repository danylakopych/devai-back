import { Test, TestingModule } from '@nestjs/testing';
import { ProjectPhaseService } from './project-phase.service';

describe('ProjectPhaseService', () => {
  let service: ProjectPhaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectPhaseService],
    }).compile();

    service = module.get<ProjectPhaseService>(ProjectPhaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
