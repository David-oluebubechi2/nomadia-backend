import { Controller, Get, Param, Query } from '@nestjs/common';
import { ToursService } from './tours.service.js';
import { Public } from '../auth/public.decorator.js';

@Public()
@Controller('tours')
export class ToursController {
  constructor(private toursService: ToursService) {}

  @Get()
  findAll(
    @Query('category') category?: string,
    @Query('search') search?: string,
    @Query('sortBy') sortBy?: string,
  ) {
    return this.toursService.findAll({ category, search, sortBy });
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.toursService.findById(id);
  }
}