import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, ReportsAndSuggestions } from '@prisma/client';

@Injectable()
export class ReportsAndSuggestionsService {
  constructor(private prisma: PrismaService) {}

  async createReport(
    data: Prisma.ReportsAndSuggestionsCreateInput
  ): Promise<ReportsAndSuggestions> {
    return this.prisma.reportsAndSuggestions.create({
      data,
    });
  }

  async getReportById(id: number): Promise<ReportsAndSuggestions | null> {
    return this.prisma.reportsAndSuggestions.findUnique({
      where: { id },
    });
  }

  async getAllReports(): Promise<ReportsAndSuggestions[]> {
    return this.prisma.reportsAndSuggestions.findMany();
  }

  async updateReport(
    id: number,
    data: Prisma.ReportsAndSuggestionsUpdateInput
  ): Promise<ReportsAndSuggestions> {
    return this.prisma.reportsAndSuggestions.update({
      where: { id },
      data,
    });
  }

  async deleteReport(id: number): Promise<ReportsAndSuggestions> {
    return this.prisma.reportsAndSuggestions.delete({
      where: { id },
    });
  }
}
