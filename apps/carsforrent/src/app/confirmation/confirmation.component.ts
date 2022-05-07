import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BookingsService } from '../bookings.service';

@Component({
  selector: 'carsforrent-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  constructor(
    private router: Router,
    private bookingsService: BookingsService,
    private jwtService: JwtHelperService
  ) {}

  handleClick() {
    this.router.navigate(['/']);
    localStorage.removeItem('location');
    localStorage.removeItem('dates');
    localStorage.removeItem('car');
  }

  ngOnInit(): void {
    const car = JSON.parse(localStorage.getItem('car') || '{}');
    const dates = JSON.parse(localStorage.getItem('dates') || '{}');
    const location = JSON.parse(localStorage.getItem('location') || '{}');
    const decodedToken = this.jwtService.decodeToken();
    
    const carInfo = {
      ...car,
      ...dates,
      ...location,
      email: decodedToken.email,
      _id: undefined,
    };
    this.bookingsService.storeBooking(carInfo).subscribe((res) => {
      console.log(res);
    });
  }
}
