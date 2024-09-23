import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, ProjectPhase } from '@prisma/client';

@Injectable()
export class ProjectPhaseService {
  constructor(private prisma: PrismaService) {}

  async createPhase(
    data: Prisma.ProjectPhaseCreateInput
  ): Promise<ProjectPhase> {
    return this.prisma.projectPhase.create({
      data,
    });
  }

  async getPhaseById(id: number): Promise<ProjectPhase | null> {
    return this.prisma.projectPhase.findUnique({
      where: { id },
    });
  }

  async getAllPhases(): Promise<ProjectPhase[]> {
    return this.prisma.projectPhase.findMany();
  }

  async updatePhase(
    id: number,
    data: Prisma.ProjectPhaseUpdateInput
  ): Promise<ProjectPhase> {
    return this.prisma.projectPhase.update({
      where: { id },
      data,
    });
  }

  async deletePhase(id: number): Promise<ProjectPhase> {
    return this.prisma.projectPhase.delete({
      where: { id },
    });
  }
}
