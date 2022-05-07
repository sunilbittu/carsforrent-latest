import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { countries, CountriesDocument } from './schemas/countries.schema';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(countries.name)
    private readonly model: Model<CountriesDocument>,
  ) {}
  async findAll(): Promise<countries[]> {
    return await this.model.find().exec();
  }
}
