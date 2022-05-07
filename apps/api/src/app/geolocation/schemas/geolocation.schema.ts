/* geolocation schema goes here */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GeoLocationDocument = locations & Document;

@Schema()
export class locations {
  @Prop({ required: true })
  cityName: string;

  @Prop()
  cityCode?: string;

  @Prop({ required: true })
  cityId: string;

  @Prop({ required: true })
  provinceName: string;

  @Prop()
  provinceCode?: string;

  @Prop({ required: true })
  provinceId: string;

  @Prop({ required: true })
  countryName: string;

  @Prop()
  countryCode?: string;

  @Prop({ required: true })
  countryId: string;
}

export const GeoLocationSchema = SchemaFactory.createForClass(locations);
