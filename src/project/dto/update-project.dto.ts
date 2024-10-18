import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateProjectDto {
  @ApiPropertyOptional({
    example: 'Project 1',
    description: 'Name of the project',
  })
  @IsString()
  project_name?: string;

  @ApiPropertyOptional({
    example: 'descr',
    description: 'Descr of the project',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
