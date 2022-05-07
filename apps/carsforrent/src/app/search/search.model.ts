/* eslint-disable @typescript-eslint/no-empty-interface */
import { CarRequest } from '../interfaces/interfaces';

export interface SelectedLocation {
  address: string;
  city: string;
}

export interface IDates {
  start: string;
  end: string;
}

export interface CarDetails extends Array<CarRequest> {}
