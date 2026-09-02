import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { JwtAuthGuard } from './auth/jwt-auth.guard.js';
import { DestinationsModule } from './destinations/destinations.module.js';
import { HotelsModule } from './hotels/hotels.module.js';
import { ToursModule } from './tours/tours.module.js';
import { BookingsModule } from './bookings/bookings.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    DestinationsModule,
    HotelsModule,
    ToursModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}