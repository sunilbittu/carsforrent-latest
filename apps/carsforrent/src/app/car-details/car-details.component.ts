import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { StoreCarService } from '../store-car.service';

@Component({
  selector: 'carsforrent-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent {
  addressForm = this.fb.group({
    carName: [null, Validators.required],
    image: [null, Validators.required],
    seats: [null, Validators.required],
    carType: [null, Validators.required],
    transmission: [null, Validators.required],
    deliveryType: [null, Validators.required],
    note: [null, Validators.required],
    brand: [null, Validators.required],
    price: [null, Validators.required],
    countInStock: [null, Validators.required],
    rating: [null, Validators.required],
    numReviews: [null, Validators.required],
    fuelType: [null, Validators.required],
    locations: [null, Validators.required],
    freeKms: [null, Validators.required],
    deliveryCharges: [null, Validators.required],
    startDate: [null, Validators.required],
    endDate: [null, Validators.required],
    rentPerHour: [null, Validators.required],
    capacity: [null, Validators.required],
  });
  minDate: Date;
  dMinDate: Date;

  hasUnitNumber = false;

  types = [
    { name: 'Sedan', abbreviation: 'Sedan' },
    { name: 'SUV', abbreviation: 'SUV' },
    { name: 'Hatchback', abbreviation: 'Hatchback' },
    { name: 'Convertible', abbreviation: 'Convertible' },
  ];
  brands = [
    { name: 'Aston Martin', abbreviation: 'Aston Martin' },
    { name: 'Audi', abbreviation: 'Audi' },
    { name: 'BMW', abbreviation: 'BMW' },
    { name: 'Chevrolet', abbreviation: 'Chevrolet' },
    { name: 'Citroen', abbreviation: 'Citroen' },
    { name: 'Dacia', abbreviation: 'Dacia' },
    { name: 'Fiat', abbreviation: 'Fiat' },
    { name: 'Ford', abbreviation: 'Ford' },
    { name: 'Honda', abbreviation: 'Honda' },
  ];

  transmissions = [
    { name: 'Manual', abbreviation: 'Manual' },
    { name: 'Automatic', abbreviation: 'Automatic' },
  ];

  deliveryTypes = [
    { name: 'Self Drive', abbreviation: 'Self Drive' },
    { name: 'Rented', abbreviation: 'Rented' },
  ];

  fuelTypes = [
    { name: 'Petrol', abbreviation: 'Petrol' },
    { name: 'Diesel', abbreviation: 'Diesel' },
  ];

  constructor(private fb: FormBuilder, private carService: StoreCarService) {
    this.minDate = new Date();
    this.dMinDate = moment(this.minDate).add(1, 'days').toDate();
  }
  handleDateChange(
    type: string,
    event: MatDatepickerInputEvent<Date>,
    dateType: string
  ) {
    if (dateType === 'pkp') {
      this.dMinDate = moment(event.value).add(1, 'days').toDate();
      this.addressForm.patchValue({
        startDate: event.value,
      });
    } else {
      this.addressForm.patchValue({
        endDate: event.value,
      });
    }
  }
  onSubmit(): void {
    this.carService.storeCar(this.addressForm.value).pipe().subscribe();
  }
}
