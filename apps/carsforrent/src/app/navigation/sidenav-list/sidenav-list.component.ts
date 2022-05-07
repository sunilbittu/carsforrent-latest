/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'carsforrent-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent {
  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router) {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };

  public handleCars = () => {
    this.router.navigateByUrl('/cars')
  };

  public handleBookings = () => {
    this.sidenavClose.emit();
    this.router.navigateByUrl('/bookings')
  };
}
