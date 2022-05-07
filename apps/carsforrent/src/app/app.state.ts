import { CarDetails, IDates, SelectedLocation } from './search/search.model';

export interface AppState {
  readonly location: SelectedLocation[];
  readonly dates: IDates[];
  readonly carDetails: any;
}
