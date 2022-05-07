import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cars } from '../types/cars';
import { CarDetailsDTO } from './cars.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel('CarDetails') private carModel: Model<Cars>) {}

  async create(CarDetailsDTO: CarDetailsDTO) {
    const id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const carDetails = new this.carModel({
      ...CarDetailsDTO,
      id,
    });

    await carDetails.save();
    return carDetails;
  }

  async getAllCars() {
    return await this.carModel.find().exec();
  }
}
