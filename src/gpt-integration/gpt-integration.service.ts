import { Injectable } from '@nestjs/common';
import { GptIntegration, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateGptIntegrationDto } from './dto/create-gpt-integration.dto copy';

@Injectable()
export class GptIntegrationService {
  constructor(private prisma: PrismaService) {}

  async createGptIntegration(
    createGptIntegrationDto: CreateGptIntegrationDto
  ): Promise<GptIntegration> {
    const { gpt_name, stage_id } = createGptIntegrationDto;

    if (!stage_id) {
      throw new Error('Missing required fields: stage_id');
    }
    if (!gpt_name) {
      throw new Error('Missing required fields: gpt_name');
    }

    return this.prisma.gptIntegration.create({
      data: {
        gpt_name: gpt_name,
        stage: {
          connect: {
            stage_id: stage_id,
          },
        },
      },
    });
  }

  async getGptIntegrationById(
    gpt_session_id: number
  ): Promise<GptIntegration | null> {
    return this.prisma.gptIntegration.findUnique({
      where: { gpt_session_id },
    });
  }

  async updateGptIntegration(
    gpt_session_id: number,
    data: Prisma.GptIntegrationUpdateInput
  ): Promise<GptIntegration> {
    return this.prisma.gptIntegration.update({
      where: { gpt_session_id },
      data,
    });
  }

  async deleteGptIntegration(gpt_session_id: number): Promise<GptIntegration> {
    return this.prisma.gptIntegration.delete({
      where: { gpt_session_id },
    });
  }

  async getGptIntegrationByStageId(
    stage_id: number
  ): Promise<GptIntegration[]> {
    return this.prisma.gptIntegration.findMany({
      where: { stage_id },
    });
  }
}
