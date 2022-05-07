import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from '../models/cars.schema';
import { CarsController } from './cars.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CarDetails', schema: CarSchema }]),
  ],
  providers: [CarsService],
  controllers: [CarsController],
  exports: [CarsService],
})
export class CarsModule {}
