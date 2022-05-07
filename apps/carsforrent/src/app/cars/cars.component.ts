import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'carsforrent-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  addCar() {
    this.router.navigateByUrl('/car-details');
  }
}
