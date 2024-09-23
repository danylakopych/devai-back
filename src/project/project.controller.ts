import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Project } from '@prisma/client';

@ApiTags('Projects')
@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @ApiBody({ type: CreateProjectDto })
  async create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectService.createProject(createProjectDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Project | null> {
    return this.projectService.getProjectById(Number(id));
  }

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectService.getAllProjects();
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto
  ): Promise<Project> {
    return this.projectService.updateProject(
      parseInt(id, 10),
      updateProjectDto
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Project> {
    return this.projectService.deleteProject(Number(id));
  }
}
