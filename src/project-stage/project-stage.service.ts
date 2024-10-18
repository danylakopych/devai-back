import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProjectStageDto } from './dto/create-project-stage.dto';
import { Prisma, ProjectStage } from '@prisma/client';

@Injectable()
export class ProjectStageService {
  constructor(private prisma: PrismaService) {}

  async createProjectStage(
    createProjectStageDto: CreateProjectStageDto
  ): Promise<ProjectStage> {
    const { project_id, ...projectStageData } = createProjectStageDto;

    return this.prisma.projectStage.create({
      data: {
        ...projectStageData,
        project: {
          connect: { project_id: project_id },
        },
      },
    });
  }

  async getAllProjectStage(): Promise<ProjectStage[]> {
    return this.prisma.projectStage.findMany();
  }

  async getProjectStageById(id: number): Promise<ProjectStage | null> {
    return this.prisma.projectStage.findUnique({
      where: { stage_id: id },
    });
  }

  async updateProjectStage(
    stage_id: number,
    data: Prisma.ProjectStageUpdateInput
  ): Promise<ProjectStage> {
    return this.prisma.projectStage.update({
      where: { stage_id },
      data,
    });
  }

  async deleteProjectStage(stage_id: number): Promise<ProjectStage> {
    return this.prisma.projectStage.delete({
      where: { stage_id },
    });
  }
}
