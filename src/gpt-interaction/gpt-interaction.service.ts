import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, GPTInteraction } from '@prisma/client';

@Injectable()
export class GPTInteractionService {
  constructor(private prisma: PrismaService) {}

  async createInteraction(
    data: Prisma.GPTInteractionCreateInput
  ): Promise<GPTInteraction> {
    return this.prisma.gPTInteraction.create({
      data,
    });
  }

  async getInteractionById(id: number): Promise<GPTInteraction | null> {
    return this.prisma.gPTInteraction.findUnique({
      where: { id },
    });
  }

  async getAllInteractions(): Promise<GPTInteraction[]> {
    return this.prisma.gPTInteraction.findMany();
  }

  async updateInteraction(
    id: number,
    data: Prisma.GPTInteractionUpdateInput
  ): Promise<GPTInteraction> {
    return this.prisma.gPTInteraction.update({
      where: { id },
      data,
    });
  }

  async deleteInteraction(id: number): Promise<GPTInteraction> {
    return this.prisma.gPTInteraction.delete({
      where: { id },
    });
  }
}
