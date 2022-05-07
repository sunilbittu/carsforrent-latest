import { Document } from 'mongoose';

export interface Cars extends Document {
  id: string;
  carName: string;
  seats: number;
  carType: string;
  transmission: string;
  deliveryType: string;
  note: string;
  brand: string;
  price: string;
  countInStock: string;
  rating: string;
  numReviews: string;
  fuelType: string;
  locations: string;
  freeKms: string;
  deliveryCharges: string;
  startDate: string;
  endDate: string;
  rentPerHour: string;
  capacity: string;
}
