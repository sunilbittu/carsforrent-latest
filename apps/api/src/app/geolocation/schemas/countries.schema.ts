/* geolocation schema goes here */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CountriesDocument = countries & Document;

@Schema()
export class countries {
  @Prop({ required: true })
  countryName: string;

  @Prop()
  countryCode?: string;

  @Prop({ required: true })
  countryId: string;
}

export const CountriesSchema = SchemaFactory.createForClass(countries);
