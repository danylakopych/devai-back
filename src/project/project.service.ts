import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Project } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async createProject(data: Prisma.ProjectCreateInput): Promise<Project> {
    return this.prisma.project.create({
      data,
    });
  }

  async getProjectById(id: number): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: { id },
    });
  }

  async getAllProjects(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  async updateProject(
    id: number,
    data: Prisma.ProjectUpdateInput
  ): Promise<Project> {
    return this.prisma.project.update({
      where: { id },
      data,
    });
  }

  async deleteProject(id: number): Promise<Project> {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}
