import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { JwtModule } from '@auth0/angular-jwt';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ReviewComponent } from './review/review.component';
import { UsersComponent } from './users/users.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CarDetailsComponent } from './car-details/car-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsComponent } from './cars/cars.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FailuerComponent } from './failuer/failuer.component';
import {
  addLocationReducer,
  datesReducer,
  selectedCarReducer,
} from './reducers/search.reducer';
import { DateformatterPipe } from './dateformatter.pipe';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { FooterComponent } from './footer/footer.component';
import { PromoComponent } from './promo/promo.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SidenavListComponent,
    SignupComponent,
    SearchComponent,
    ResultsComponent,
    ReviewComponent,
    UsersComponent,
    BookingsComponent,
    UserDetailsComponent,
    CarDetailsComponent,
    UsersListComponent,
    BookingsListComponent,
    CarsListComponent,
    CarsComponent,
    AddressDetailsComponent,
    ConfirmationComponent,
    FailuerComponent,
    DateformatterPipe,
    AccessDeniedComponent,
    FooterComponent,
    PromoComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPnDatU8GFmaTp3-rfJAKmjLS6bPMEjrY',
      libraries: ['places'],
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    StoreModule.forRoot({
      location: addLocationReducer,
      dates: datesReducer,
      carDetails: selectedCarReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
    MatGoogleMapsAutocompleteModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
