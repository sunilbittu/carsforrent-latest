/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import _ from 'lodash';
import { AppState } from '../app.state';
import { CarRequest, CarResponse, SearchResponse } from '../interfaces/interfaces';
import { IDates } from '../search/search.model';
import { StoreCarService } from '../store-car.service';
import { images } from './helper';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'carsforrent-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public cars: any
  public dates: IDates;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private searchService: SearchService,
  ) {}

  ngOnInit() {
    const address = JSON.parse(localStorage.getItem('address') || '{}');
    const dates = JSON.parse(localStorage.getItem('dates') || '{}');
    const formattedStartDate = moment(dates.start).format('YYYY-MM-DD');
    const formattedEndDate = moment(dates.end).format('YYYY-MM-DD');
    const request = { address: address.address, city: address.city, start: formattedStartDate, end: formattedEndDate };
    this.searchService.getAvailableCars(request).pipe().subscribe(
      (res) => {
        this.cars = res;
        this.getAvailableCars();
      }
    );
  }
  getAvailableCars() {
    const formattedData = _.uniqBy(this.cars.carDetails, '_id');
    this.cars = formattedData.length
      ? formattedData.map((item) => ({
          ...item,
          img: images[Math.floor(Math.random() * 10)],
        }))
      : [];
  }
  handleBookNow(car: CarRequest) {
    this.store.dispatch({
      type: 'SELECTED_CAR',
      payload: car,
    });
    localStorage.setItem('car', JSON.stringify(car));
    this.router.navigateByUrl('/review');
  }
}
