import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class UpdateGptIntegrationDto {
  @ApiPropertyOptional({
    example: 'Gpt 1',
    description: 'Name of the chat',
  })
  @IsString()
  gpt_name?: string;

  @ApiPropertyOptional({
    example: 'descr',
    description: 'Id of the Stage',
  })
  @IsInt()
  stage_id?: number;
}
