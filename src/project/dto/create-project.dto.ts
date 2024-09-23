import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({
    example: 'New Software Project',
    description: 'Name of the project',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'This project is for developing a new software.',
    description: 'Description of the project',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: '2024-09-23T12:00:00.000Z',
    description: 'Data of the start',
  })
  @IsOptional()
  @IsDateString()
  startDate: string;

  @ApiProperty({
    example: '2028-09-23T12:00:00.000Z',
    description: 'Data of the end',
  })
  @IsOptional()
  @IsDateString()
  endDate?: string;
}
