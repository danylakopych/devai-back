import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  /* async createUser(
    @Body() userData: { email: string; name: string; role: Role }
  ): Promise<User> {
    return this.userService.createUser(userData);
  } */
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User | null> {
    return this.userService.getUserById(Number(id));
  }

  @Patch(':id')
  /* async updateUser(
    @Param('id') id: number,
    @Body() userData: { email?: string; name?: string; role?: Role }
  ): Promise<User> {
    return this.userService.updateUser(Number(id), userData);
  } */
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    return this.userService.updateUser(parseInt(id, 10), updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<User> {
    return this.userService.deleteUser(Number(id));
  }
}
