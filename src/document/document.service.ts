import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Document } from '@prisma/client';

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService) {}

  async createDocument(data: Prisma.DocumentCreateInput): Promise<Document> {
    return this.prisma.document.create({
      data,
    });
  }

  async getDocumentById(id: number): Promise<Document | null> {
    return this.prisma.document.findUnique({
      where: { id },
    });
  }

  async getAllDocuments(): Promise<Document[]> {
    return this.prisma.document.findMany();
  }

  async updateDocument(
    id: number,
    data: Prisma.DocumentUpdateInput
  ): Promise<Document> {
    return this.prisma.document.update({
      where: { id },
      data,
    });
  }

  async deleteDocument(id: number): Promise<Document> {
    return this.prisma.document.delete({
      where: { id },
    });
  }
}
