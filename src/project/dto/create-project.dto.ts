import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: 'Project 1', description: 'Name of the project' })
  @IsNotEmpty()
  @IsString()
  project_name: string;

  @ApiProperty({
    example: 'Description for project 1',
    description: 'Description of the project',
  })
  @IsString()
  description?: string;

  @ApiProperty({
    example: '1',
    description: 'User ID',
  })
  @IsNotEmpty()
  @IsNumber()
  user_id: number;
}
