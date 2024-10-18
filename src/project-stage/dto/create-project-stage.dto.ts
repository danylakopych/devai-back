import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  IsString,
} from 'class-validator';

export class CreateProjectStageDto {
  @ApiProperty({
    example: 'ProjectStage 1',
    description: 'Name of the projectStage',
  })
  @IsNotEmpty()
  @IsString()
  stage_name: string;

  @ApiProperty({
    example: '2024-09-17T09:00:00Z',
    description: 'The start date of the project in ISO 8601 format',
  })
  @IsNotEmpty()
  @IsDateString()
  start_date: Date;

  @ApiProperty({
    example: '2024-10-17T09:00:00Z',
    description: 'The start date of the project in ISO 8601 format',
  })
  @IsOptional()
  @IsDateString()
  end_date?: Date;

  @ApiProperty({
    example: '1',
    description: 'Project ID',
  })
  @IsNotEmpty()
  @IsInt()
  project_id: number;
}
