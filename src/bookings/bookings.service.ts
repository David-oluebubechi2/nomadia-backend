import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

type CreateBookingInput = {
  destination: string;
  country: string;
  hotel: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  price: number;
  image?: string;
  category?: string;
  itemId?: string;
  status?: string;
  traveller: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  payment: {
    method: string;
    last4: string;
    total: number;
  };
};

type UpdateBookingInput = Partial<Omit<CreateBookingInput, 'traveller' | 'payment'>>;

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: string) {
    return this.prisma.booking.findMany({
      where: { userId },
      orderBy: { created: 'desc' },
    });
  }

  async findById(id: string, userId?: string) {
    const booking = await this.prisma.booking.findUnique({ where: { id } });
    if (!booking) {
      throw new NotFoundException('Booking not found.');
    }
    if (userId && booking.userId && booking.userId !== userId) {
      throw new ForbiddenException('You do not have access to this booking.');
    }
    return booking;
  }

  generateReference(prefix = 'NMD') {
    const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
    return `${prefix}-${rand}`;
  }

  async create(userId: string, input: CreateBookingInput) {
    const reference = this.generateReference();
    return this.prisma.booking.create({
      data: {
        reference,
        destination: input.destination,
        country: input.country,
        hotel: input.hotel,
        checkIn: input.checkIn,
        checkOut: input.checkOut,
        guests: input.guests,
        nights: input.nights,
        price: input.price,
        status: input.status ?? 'Confirmed',
        image: input.image ?? '',
        category: input.category,
        itemId: input.itemId,
        travellerFirstName: input.traveller.firstName,
        travellerLastName: input.traveller.lastName,
        travellerEmail: input.traveller.email,
        travellerPhone: input.traveller.phone,
        paymentMethod: input.payment.method,
        paymentLast4: input.payment.last4,
        paymentTotal: input.payment.total,
        user: { connect: { id: userId } },
      },
    });
  }

  async update(id: string, userId: string, input: UpdateBookingInput) {
    const booking = await this.findById(id, userId);
    if (booking.status === 'Cancelled') {
      throw new ForbiddenException('A cancelled booking cannot be modified.');
    }

    return this.prisma.booking.update({
      where: { id },
      data: {
        destination: input.destination,
        country: input.country,
        hotel: input.hotel,
        checkIn: input.checkIn,
        checkOut: input.checkOut,
        guests: input.guests,
        nights: input.nights,
        price: input.price,
      },
    });
  }

  async cancel(id: string, userId: string) {
    await this.findById(id, userId);
    return this.prisma.booking.update({
      where: { id },
      data: { status: 'Cancelled' },
    });
  }
}