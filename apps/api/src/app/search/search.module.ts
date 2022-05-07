import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from '../models/cars.schema';
import { SearchController } from './search.controller';
import { BookingsSchema } from '../models/bookings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([ { name: 'BookingDetails', schema: BookingsSchema },
    { name: 'CarDetails', schema: CarSchema },]),
  ],
  providers: [SearchService],
  controllers: [SearchController],
  exports: [SearchService],
})
export class SearchModule {}
