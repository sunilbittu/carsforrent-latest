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
  getAvailableCars(searchRequest: SearchRequest): Observable<any[]> {
    return this.http
      .post<any[]>(
        '/api/cars/availablecars',
        searchRequest
      )
      .pipe(
        tap((res: any[]) => {
          return res;
        })
      );
  }
}
