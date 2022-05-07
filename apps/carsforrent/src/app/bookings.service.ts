import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { BookingRequest, BookingResponse } from './interfaces/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  constructor(private http: HttpClient, private router: Router) {}

  storeBooking(bookingRequest: BookingRequest): Observable<BookingResponse> {
    return this.http
      .post<BookingResponse>('/api/booking/create', bookingRequest)
      .pipe(
        tap((res: BookingResponse) => {
          res.status === 200 && this.handleSession();
        })
      );
  }
  getAll(): Observable<BookingRequest[]> {
    return this.http.get<BookingRequest[]>('/api/booking/all');
  }
  handleSession() {
    localStorage.removeItem('location');
    localStorage.removeItem('dates');
    localStorage.removeItem('car');
  }
}
