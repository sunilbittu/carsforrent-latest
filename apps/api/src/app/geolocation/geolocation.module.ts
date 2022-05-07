import { Module } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';
import { GeolocationController } from './geolocation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { locations, GeoLocationSchema } from './schemas/geolocation.schema';
import { countries, CountriesSchema } from './schemas/countries.schema';
import { CountriesService } from './countries.service';
import { CityAreasSchema } from './schemas/cityareas.schema';
import { CityAreasService } from './cityareas.service';

@Module({
  providers: [GeolocationService, CountriesService, CityAreasService],
  controllers: [GeolocationController],
  exports: [GeolocationService],
  imports: [
    MongooseModule.forFeature([
      { name: locations.name, schema: GeoLocationSchema },
    ]),
    MongooseModule.forFeature([
      { name: countries.name, schema: CountriesSchema },
    ]),
    MongooseModule.forFeature([{ name: 'cityareas', schema: CityAreasSchema }]),
  ],
})
export class GeolocationModule {}
