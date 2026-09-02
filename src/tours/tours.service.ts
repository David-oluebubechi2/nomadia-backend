import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ToursService {
  constructor(private prisma: PrismaService) {}

  findAll(filters?: { category?: string; search?: string; sortBy?: string }) {
    const where: Record<string, unknown> = {};
    if (filters?.category) where.category = filters.category;
    if (filters?.search) {
      where.OR = [
        { title: { contains: filters.search, mode: 'insensitive' } },
        { location: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    let orderBy: Record<string, string> = { rating: 'desc' };
    switch (filters?.sortBy) {
      case 'price-low':
        orderBy = { price: 'asc' };
        break;
      case 'price-high':
        orderBy = { price: 'desc' };
        break;
      case 'reviews':
        orderBy = { reviews: 'desc' };
        break;
    }

    return this.prisma.tour.findMany({ where, orderBy });
  }

  findById(id: string) {
    return this.prisma.tour.findUnique({ where: { id } });
  }

  create(data: { title: string; location: string; country: string; category: string; description: string; image: string; price: number; duration: string }) {
    return this.prisma.tour.create({ data });
  }
}