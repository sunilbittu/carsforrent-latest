import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { SearchComponent } from '../search/search.component';
import { ResultsComponent } from '../results/results.component';
import { ReviewComponent } from '../review/review.component';
import { UsersComponent } from '../users/users.component';
import { BookingsComponent } from '../bookings/bookings.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { CarsComponent } from '../cars/cars.component';
import { AddressDetailsComponent } from '../address-details/address-details.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { FailuerComponent } from '../failuer/failuer.component';
import { AuthGuard } from '../auth-guard/auth.guard';
import { AccessDeniedComponent } from '../access-denied/access-denied.component';

const routes: Routes = [
  { path: 'accessdenied', component: AccessDeniedComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search', component: SearchComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'review/success', component: ConfirmationComponent },
  { path: 'review/failuer', component: FailuerComponent },
  {
    path: 'users',
    component: UsersComponent,
    data: {
      allowedRoles: [{ isAdmin: true }],
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'bookings',
    component: BookingsComponent,
    data: {
      allowedRoles: [{ isAdmin: true }],
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'user-details',
    component: UserDetailsComponent,
    data: {
      allowedRoles: [{ isAdmin: true }],
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'car-details',
    component: CarDetailsComponent,
    data: {
      allowedRoles: [{ isAdmin: true }],
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'cars',
    component: CarsComponent,
    data: {
      allowedRoles: [{ isAdmin: true }],
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'address-details',
    component: AddressDetailsComponent,
    data: {
      allowedRoles: [{ isAdmin: true }],
    },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
