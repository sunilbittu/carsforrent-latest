import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { GeolocationService } from './geolocation.service';
import { CityAreasService } from './cityareas.service';

@Controller('geolocation')
export class GeolocationController {
  constructor(
    private readonly service: GeolocationService,
    private readonly countryService: CountriesService,
    private readonly cityAreasService: CityAreasService,
  ) {}
  @Get()
  async findAll() {
    return await this.service.findAll();
  }
  @Get('/countries')
  async findAllCountries() {
    return await this.countryService.findAll();
  }
  @Get('/:id')
  async find(@Param('id') id: string) {
    return await this.service.findAllCities(id);
  }
  @Get('/cities/:id')
  async findCities(@Param('id') id: number) {
    return await this.cityAreasService.findAllCityAreas(id);
  }
}
