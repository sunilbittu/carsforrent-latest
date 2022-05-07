/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadStripe } from '@stripe/stripe-js';
import { AppState } from '../app.state';

@Component({
  selector: 'carsforrent-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  public carInfo: any = {};

  constructor(private store: Store<AppState>) {}

  priceId = 'price_1KsLopSG3qIpCwwIhwlN2GBr';
  stripePromise = loadStripe(
    'pk_test_51Ks9RASG3qIpCwwI5KFeZkEJ2GVxuIAUcrA4A6p8wa6xYdqVDkOTqx8a7A72II8Z1VsitpZ5DUWOhxMWzVX3K0dU00B3tXqw2g'
  );
  async checkout() {
    const stripe = await this.stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: this.priceId, quantity: 1 }],
      successUrl: `${window.location.href}/success`,
      cancelUrl: `${window.location.href}/failure`,
    });
    if (error) {
      console.error(error);
    }
  }

  ngOnInit() {
    /*  this.store
      .select((state) => state.carDetails)
      .subscribe((res) => {
        this.carInfo = res.selectedCar;
      }); */

    const car = JSON.parse(localStorage.getItem('car') || '{}');
    const dates = JSON.parse(localStorage.getItem('dates') || '{}');
    const address = JSON.parse(localStorage.getItem('location') || '{}');
    this.carInfo = { ...car, ...dates, ...address };
  }
}
