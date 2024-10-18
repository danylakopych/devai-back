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
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from '@prisma/client';
import { UpdateProjectDto } from './dto/update-project.dto';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @ApiBody({ type: CreateProjectDto })
  async createProject(
    @Body() createProjectDto: CreateProjectDto
  ): Promise<Project> {
    return this.projectService.createProject(createProjectDto);
  }

  @Get('id/:id')
  async getProjectById(@Param('id') id: number): Promise<Project | null> {
    return this.projectService.getProjectById(Number(id));
  }

  @Get()
  async getAllProjects(): Promise<Project[]> {
    return this.projectService.getAllProject();
  }

  @Patch(':id')
  async updateProject(
    @Param('id') id: string,
    @Body() updateProject: UpdateProjectDto
  ): Promise<Project> {
    return this.projectService.updateProject(parseInt(id, 10), updateProject);
  }

  @Delete(':id')
  async deleteProject(@Param('id') id: number): Promise<Project> {
    return this.projectService.deleteProject(Number(id));
  }

  @Get('user/:id')
  async getAllProjectsByUserId(
    @Param('id') user_id: string
  ): Promise<Project[]> {
    return this.projectService.getProjectByUserId(Number(user_id));
  }
}
