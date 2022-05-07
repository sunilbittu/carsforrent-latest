import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
  id: { type: String, required: true },
  carName: { type: String, required: true },
  seats: { type: Number, required: true },
  carType: { type: String, required: true },
  transmission: { type: String, required: true },
  deliveryType: { type: String, required: true },
  note: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: String, required: true },
  countInStock: { type: String, required: true },
  rating: { type: String, required: true },
  numReviews: { type: String, required: true },
  fuelType: { type: String, required: true },
  locations: { type: String, required: true },
  freeKms: { type: String, required: true },
  deliveryCharges: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  rentPerHour: { type: String, required: true },
  capacity: { type: String, required: true },
});
