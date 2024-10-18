import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString, IsInt } from 'class-validator';

export class UpdateProjectStageDto {
  @ApiPropertyOptional({
    example: 'ProjectStage 1',
    description: 'Name of the projectStage',
  })
  @IsOptional()
  @IsString()
  stage_name?: string;

  @ApiPropertyOptional({
    example: '2024-09-17T09:00:00Z',
    description: 'The start date of the project in ISO 8601 format',
  })
  @IsOptional()
  @IsDateString()
  start_date?: Date;

  @ApiPropertyOptional({
    example: '2024-09-17T09:00:00Z',
    description: 'The start date of the project in ISO 8601 format',
  })
  @IsOptional()
  @IsDateString()
  end_date?: Date;

  @ApiPropertyOptional({
    example: '1',
    description: 'Project ID',
  })
  @IsOptional()
  @IsInt()
  project_id?: number;
}
