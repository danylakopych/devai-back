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
import { CreateProjectStageDto } from './dto/create-project-stage.dto';
import { ProjectStage } from '@prisma/client';
import { ProjectStageService } from './project-stage.service';
import { UpdateProjectStageDto } from './dto/update-project-stage.dto';

@ApiTags('Project Stage')
@Controller('project-stage')
export class ProjectStageController {
  constructor(private readonly projectStageService: ProjectStageService) {}

  @Post()
  @ApiBody({ type: CreateProjectStageDto })
  async createProjectStage(
    @Body() createProjectStageDto: CreateProjectStageDto
  ): Promise<ProjectStage> {
    return this.projectStageService.createProjectStage(createProjectStageDto);
  }

  @Get('id/:id')
  async getProjectStageById(
    @Param('id') id: number
  ): Promise<ProjectStage | null> {
    return this.projectStageService.getProjectStageById(Number(id));
  }

  @Get()
  async getAllProjectStage(): Promise<ProjectStage[]> {
    return this.projectStageService.getAllProjectStage();
  }

  @Patch(':id')
  async updateProjectStage(
    @Param('id') id: string,
    @Body() updateProject: UpdateProjectStageDto
  ): Promise<ProjectStage> {
    return this.projectStageService.updateProjectStage(
      parseInt(id, 10),
      updateProject
    );
  }

  @Delete(':id')
  async deleteProjectStage(@Param('id') id: number): Promise<ProjectStage> {
    return this.projectStageService.deleteProjectStage(Number(id));
  }
}
