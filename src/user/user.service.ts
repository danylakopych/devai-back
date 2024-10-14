import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async getUserById(user_id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { user_id },
    });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findFirstOrThrow({
      where: { email: email },
    });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async updateUser(
    user_id: number,
    data: Prisma.UserUpdateInput
  ): Promise<User> {
    return this.prisma.user.update({
      where: { user_id },
      data,
    });
  }

  async deleteUser(user_id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { user_id },
    });
  }
}
