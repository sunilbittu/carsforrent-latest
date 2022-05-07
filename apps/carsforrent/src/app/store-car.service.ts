/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { CarRequest, CarResponse } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StoreCarService {
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}
  storeCar(carRequest: CarRequest): Observable<CarResponse> {
    return this.http.post<CarResponse>('/api/cars/create', carRequest).pipe(
      tap(() => {
        this.snackbar.open(`Car created successfully`, 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }),
      tap(
        (res: CarResponse) =>
          res.status === 200 && this.router.navigateByUrl('/cars')
      )
    );
  }
  getAllCars(): Observable<CarRequest[]> {
    return this.http.get<CarRequest[]>('/api/cars/all');
  }
}
