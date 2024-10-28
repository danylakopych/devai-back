import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { GptIntegrationService } from './gpt-integration.service';
import { CreateGptIntegrationDto } from './dto/create-gpt-integration.dto copy';
import { GptIntegration } from '@prisma/client';
import { UpdateGptIntegrationDto } from './dto/update-gpt-integration.dto';

@ApiTags('Gpt-integration')
@Controller('gpt-integration')
export class GptIntegrationController {
  constructor(private readonly gptIntegrationService: GptIntegrationService) {}

  @Post()
  @ApiBody({ type: CreateGptIntegrationDto })
  async createGptIntegration(
    @Body() createGptIntegration: CreateGptIntegrationDto
  ): Promise<GptIntegration> {
    return this.gptIntegrationService.createGptIntegration(
      createGptIntegration
    );
  }

  @Get(':id')
  async getGptIntegrationById(
    @Param('id') id: number
  ): Promise<GptIntegration | null> {
    return this.gptIntegrationService.getGptIntegrationById(Number(id));
  }

  @Patch(':id')
  async updateGptIntegration(
    @Param('id') id: string,
    @Body() updateGptIntegration: UpdateGptIntegrationDto
  ): Promise<GptIntegration> {
    return this.gptIntegrationService.updateGptIntegration(
      parseInt(id, 10),
      updateGptIntegration
    );
  }

  @Delete('id')
  async deleteGptIntegration(@Param('id') id: number): Promise<GptIntegration> {
    return this.gptIntegrationService.deleteGptIntegration(Number(id));
  }

  @Get('project-stage/:id')
  async getAllGptByStageId(
    @Param('id') stage_id: string
  ): Promise<GptIntegration[]> {
    return this.gptIntegrationService.getGptIntegrationByStageId(
      Number(stage_id)
    );
  }
}
