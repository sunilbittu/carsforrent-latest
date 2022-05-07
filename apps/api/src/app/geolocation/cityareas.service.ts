import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { cityareas, CityAreasDocument } from './schemas/cityareas.schema';

@Injectable()
export class CityAreasService {
  constructor(
    @InjectModel(cityareas.name)
    private readonly model: Model<CityAreasDocument>,
  ) {}
  async findAllCityAreas(id: number): Promise<cityareas[]> {
    return await this.model.find({ cityId: id }).exec();
  }
}
