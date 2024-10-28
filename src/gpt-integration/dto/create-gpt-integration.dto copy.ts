import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGptIntegrationDto {
  @ApiProperty({ example: 'Gpt 1', description: 'Name of the GptIntegration' })
  @IsNotEmpty()
  @IsString()
  gpt_name: string;

  @ApiProperty({
    example: '1',
    description: 'Stage ID',
  })
  @IsNotEmpty()
  @IsNumber()
  stage_id: number;
}
