import { Injectable } from '@nestjs/common';
import { Prisma, Project } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    const { user_id, project_name, description } = createProjectDto;

    if (!user_id) {
      throw new Error('Missing required fields: user_id');
    }
    if (!project_name) {
      throw new Error('Missing required fields: project_name');
    }
    if (!description) {
      throw new Error('Missing required fields: description');
    }

    return this.prisma.project.create({
      data: {
        project_name: project_name,
        description: description,
        user: {
          connect: {
            user_id: user_id,
          },
        },
      },
    });
  }

  async getProjectById(project_id: number): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: { project_id },
    });
  }

  async getAllProject(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  async updateProject(
    project_id: number,
    data: Prisma.ProjectUpdateInput
  ): Promise<Project> {
    return this.prisma.project.update({
      where: { project_id },
      data,
    });
  }

  async deleteProject(project_id: number): Promise<Project> {
    return this.prisma.project.delete({
      where: { project_id },
    });
  }

  async getProjectByUserId(user_id: number): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: { user_id },
    });
  }
}
