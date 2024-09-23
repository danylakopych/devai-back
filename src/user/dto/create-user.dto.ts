import { IsEmail, IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({
    example: 'test@example.com',
    description: 'Email of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John Doe', description: 'Name of the user' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'DEVELOPER',
    enum: Role,
    description: 'Role of the user',
  })
  @IsEnum(Role, { message: 'Role must be one of ADMIN, USER, GUEST' })
  role: Role;
}
