import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'Name of the user' })
  @IsString()
  username: string;

  @ApiProperty({
    example: 'test@example.com',
    description: 'Email of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'qwerty123',
    description: 'Password of the user',
  })
  @IsString()
  password: string;
}
