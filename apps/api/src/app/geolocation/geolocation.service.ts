import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { locations, GeoLocationDocument } from './schemas/geolocation.schema';

@Injectable()
export class GeolocationService {
  constructor(
    @InjectModel(locations.name)
    private readonly model: Model<GeoLocationDocument>,
  ) {}
  async findAll(): Promise<locations[]> {
    return await this.model.find().exec();
  }
  async findAllCities(id: string): Promise<locations[]> {
    return await this.model.find({ countryId: id }).exec();
  }
}
