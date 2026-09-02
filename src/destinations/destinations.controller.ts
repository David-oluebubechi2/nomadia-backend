import { Controller, Get, Param, Query } from '@nestjs/common';
import { DestinationsService } from './destinations.service.js';
import { Public } from '../auth/public.decorator.js';

@Public()
@Controller('destinations')
export class DestinationsController {
  constructor(private destinationsService: DestinationsService) {}

  @Get()
  findAll(
    @Query('region') region?: string,
    @Query('category') category?: string,
    @Query('search') search?: string,
  ) {
    return this.destinationsService.findAll({ region, category, search });
  }

  @Get(':slug')
  findBySlug(@Param('slug') slug: string) {
    return this.destinationsService.findBySlug(slug);
  }
}