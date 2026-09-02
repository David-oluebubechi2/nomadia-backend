import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { BookingsService } from './bookings.service.js';
import { CreateBookingDto, UpdateBookingDto } from './dto/booking.dto.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';

@UseGuards(JwtAuthGuard)
@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Get()
  findAll(@Request() req: { user: { sub: string } }) {
    return this.bookingsService.findAll(req.user.sub);
  }

  @Get(':id')
  findById(@Param('id') id: string, @Request() req: { user: { sub: string } }) {
    return this.bookingsService.findById(id, req.user.sub);
  }

  @Post()
  create(@Request() req: { user: { sub: string } }, @Body() dto: CreateBookingDto) {
    return this.bookingsService.create(req.user.sub, dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Request() req: { user: { sub: string } }, @Body() dto: UpdateBookingDto) {
    return this.bookingsService.update(id, req.user.sub, dto);
  }

  @Delete(':id')
  cancel(@Param('id') id: string, @Request() req: { user: { sub: string } }) {
    return this.bookingsService.cancel(id, req.user.sub);
  }
}