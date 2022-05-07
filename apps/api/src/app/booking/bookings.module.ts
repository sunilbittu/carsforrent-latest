import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingsSchema } from '../models/bookings.schema';
import { BookingsController } from './booking.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'BookingDetails', schema: BookingsSchema },
    ]),
  ],
  providers: [BookingsService],
  controllers: [BookingsController],
  exports: [BookingsService],
})
export class BookingsModule {}
