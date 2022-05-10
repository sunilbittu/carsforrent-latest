import { Body, Controller, Get } from '@nestjs/common';
import { SearchDetailsDTO } from './search.dto';
import { SearchService } from './search.service';

@Controller('cars')
export class SearchController {
  constructor(private searchService: SearchService) {}
  @Get('availablecars')
  async getAllAvailableCars(@Body() searchDetails: SearchDetailsDTO) {
    const carDetails =  await this.searchService.getAvailability(searchDetails);
    return {
      carDetails,
      message: carDetails.length ? 'Cars available' : 'No cars available',
      status: 200,
    }
  }
}
