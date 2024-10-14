import { IsOptional, IsString, IsEmail } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'John Doe', description: 'Name of the user' })
  @IsString()
  username?: string;

  @ApiPropertyOptional({
    example: 'test@example.com',
    description: 'Email of the user',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    example: 'qwerty123',
    description: 'Password of the user',
  })
  @IsOptional()
  @IsString()
  password?: string;
}
