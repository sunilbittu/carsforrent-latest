import { CarDetailsDTO } from '../cars/cars.dto';

export interface BookingDetailsDTO extends CarDetailsDTO {
  start: Date;
  end: Date;
  address: string;
  city: string;
  img?: string;
  email: string;
}
