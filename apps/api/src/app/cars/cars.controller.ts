import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarDetailsDTO } from './cars.dto';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get('all')
  async getAllCars() {
    return await this.carsService.getAllCars();
  }
  @Post('create')
  async register(@Body() carDetailsDto: CarDetailsDTO) {
    const carDetails = await this.carsService.create(carDetailsDto);
    return {
      carDetails,
      message: 'Car details created successfully',
      status: 200,
    };
  }
}
