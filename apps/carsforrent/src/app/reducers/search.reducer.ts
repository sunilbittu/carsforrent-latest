import { CarRequest } from '../interfaces/interfaces';
import { IDates, SelectedLocation } from './../search/search.model';

export const SEARCH_LOCATION = 'SEARCH_LOCATION';
export const SEARCH_DATES = 'SEARCH_DATES';
export const SELECTED_CAR = 'SELECTED_CAR';

export function addLocationReducer(state: SelectedLocation[] = [], action) {
  switch (action.type) {
    case SEARCH_LOCATION:
      return {
        ...state,
        address: action.payload.address,
        city: action.payload.city,
      };
    default:
      return state;
  }
}

export function datesReducer(state: IDates[] = [], action) {
  switch (action.type) {
    case SEARCH_DATES:
      return {
        ...state,
        start: action.payload.start,
        end: action.payload.end,
      };
    default:
      return state;
  }
}

export function selectedCarReducer(state: CarRequest[] = [], action) {
  switch (action.type) {
    case SELECTED_CAR:
      return {
        ...state,
        selectedCar: action.payload,
      };
    default:
      return state;
  }
}
