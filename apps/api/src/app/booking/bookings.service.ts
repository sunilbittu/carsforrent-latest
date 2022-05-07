import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import moment = require('moment');
import { Model } from 'mongoose';
import { Bookings } from '../types/bookings';
import { BookingDetailsDTO } from './booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel('BookingDetails') private bookingModel: Model<Bookings>
  ) {}

  async create(bookingDetails: BookingDetailsDTO) {
    const request  = {...bookingDetails, start: new Date(moment(bookingDetails.start).format('YYYY-MM-DD')), end: new Date(moment(moment(bookingDetails.end)).format('YYYY-MM-DD'))};
    const booking = new this.bookingModel(request);

    await booking.save();
    return booking;
  }

  async getAll() {
    return await this.bookingModel.find().exec();
  }
}
