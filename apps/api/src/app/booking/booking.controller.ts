import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookingDetailsDTO } from './booking.dto';
import { BookingsService } from './bookings.service';

@Controller('booking')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}
  @Get('all')
  async getAll() {
    return await this.bookingsService.getAll();
  }
  @Post('create')
  async register(@Body() bookingDetailsDto: BookingDetailsDTO) {
    const bookingDetails = await this.bookingsService.create(bookingDetailsDto);
    return {
      bookingDetails,
      message: 'Booking details created successfully',
      status: 200,
    };
  }
}
