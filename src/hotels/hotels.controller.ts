import { Controller, Get, Param, Query } from '@nestjs/common';
import { HotelsService } from './hotels.service.js';
import { Public } from '../auth/public.decorator.js';

@Public()
@Controller('hotels')
export class HotelsController {
  constructor(private hotelsService: HotelsService) {}

  @Get()
  findAll(
    @Query('category') category?: string,
    @Query('search') search?: string,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string,
  ) {
    return this.hotelsService.findAll({
      category,
      search,
      minPrice: minPrice ? parseInt(minPrice, 10) : undefined,
      maxPrice: maxPrice ? parseInt(maxPrice, 10) : undefined,
    });
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.hotelsService.findById(id);
  }
}