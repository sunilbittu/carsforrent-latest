import { IDates, SelectedLocation } from '../search/search.model';

/*
Interface for the Refresh Token (can look different; based on your backend api)
*/
export interface RefreshToken {
  id: number;
  userId: number;
  token: string;
  refreshCount: number;
  expiryDate: Date;
}

/*
  Interface for the Login Response (can look different; based on your backend api)
  */
export interface LoginResponse {
  user: {
    email: string;
    isAdmin: boolean;
    _id: string;
    __v: number;
  };
  token: string;
}

/*
  Interface for the Login Request (can look different; based on your backend api)
  */
export interface LoginRequest {
  email: string;
  password: string;
}

/*
  Interface for the Register Request (can look different; based on your backend api)
  */
export interface RegisterRequest {
  email: string;
  password: string;
  isAdmin: boolean;
}

/*
  Interface for the Register Response (can look different; based on your backend api)
  */
export interface RegisterResponse {
  user: {
    email: string;
    isAdmin: boolean;
    _id: string;
    __v: number;
  };
  token: string;
}

export interface CarRequest {
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
  bookedTimeSlotsFrom: [];
  bookedTimeSlotsTo: [];
  rentPerHour: string;
  capacity: string;
  img?: string;
}

export interface CarResponse extends CarRequest {
  message: string;
  status: number;
}

export interface BookingRequest extends CarRequest, IDates, SelectedLocation {}

export interface BookingResponse {
  message: string;
  status: number;
  email: string;
}

export interface SearchRequest extends IDates, SelectedLocation {}

export interface IAddress {
  address: string;
  city: string;
}

export interface SearchResponse extends CarResponse {
  carDetails: [];
}
