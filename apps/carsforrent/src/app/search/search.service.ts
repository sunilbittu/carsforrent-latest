import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponse, SearchRequest } from '../interfaces/interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

 /* getAvailablecars /api/cars/availablecars */
  getAvailableCars(): Observable<any[]> {
    return this.http
      .get<any[]>(
        '/api/cars/availablecars',
      )
      .pipe(
        tap((res: any[]) => {
          return res;
        })
      );
  }
}
