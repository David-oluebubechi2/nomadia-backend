import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class HotelsService {
  constructor(private prisma: PrismaService) {}

  findAll(filters?: { category?: string; search?: string; minPrice?: number; maxPrice?: number }) {
    const where: Record<string, unknown> = {};
    if (filters?.category) where.category = filters.category;
    if (filters?.minPrice || filters?.maxPrice) {
      where.price = {};
      if (filters.minPrice) (where.price as Record<string, number>).gte = filters.minPrice;
      if (filters.maxPrice) (where.price as Record<string, number>).lte = filters.maxPrice;
    }
    if (filters?.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { location: { contains: filters.search, mode: 'insensitive' } },
        { country: { contains: filters.search, mode: 'insensitive' } },
      ];
    }
    return this.prisma.hotel.findMany({ where, orderBy: { rating: 'desc' } });
  }

  findById(id: string) {
    return this.prisma.hotel.findUnique({ where: { id } });
  }

  create(data: { name: string; location: string; country: string; description: string; image: string; price: number; category: string; amenities?: string[] }) {
    return this.prisma.hotel.create({ data });
  }
}