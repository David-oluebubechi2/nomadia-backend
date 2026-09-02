import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class DestinationsService {
  constructor(private prisma: PrismaService) {}

  findAll(filters?: { region?: string; category?: string; search?: string }) {
    const where: Record<string, unknown> = {};
    if (filters?.region) where.region = filters.region;
    if (filters?.category) where.category = filters.category;
    if (filters?.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { country: { contains: filters.search, mode: 'insensitive' } },
      ];
    }
    return this.prisma.destination.findMany({ where, orderBy: { rating: 'desc' } });
  }

  findBySlug(slug: string) {
    return this.prisma.destination.findUnique({ where: { slug } });
  }

  create(data: { slug: string; name: string; country: string; region: string; category: string; description: string; image: string; travelers?: string }) {
    return this.prisma.destination.create({ data: { ...data, travelers: data.travelers ?? '0' } });
  }

  delete(slug: string) {
    return this.prisma.destination.delete({ where: { slug } });
  }
}