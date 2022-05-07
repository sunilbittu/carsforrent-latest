/* geolocation schema goes here */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CityAreasDocument = cityareas & Document;

@Schema()
export class cityareas {
  @Prop({ required: true })
  cityareaId: string;

  @Prop()
  cityareaName?: string;

  @Prop({ required: true })
  cityId: number;

  @Prop({ required: true })
  cityName: string;

  @Prop({ required: true })
  countryId: string;

  @Prop({ required: true })
  countryName: string;
}

export const CityAreasSchema = SchemaFactory.createForClass(cityareas);
