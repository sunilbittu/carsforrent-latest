import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'carsforrent-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() sidenavClose = new EventEmitter();

  isAdmin = false;
  isLoggedIn = false;
  tokenExists = localStorage.getItem('token') ? true : false;
  constructor(private authService: AuthService,private router: Router,
    private jwtService: JwtHelperService) {}

  ngOnInit(): void {
    const decodeToken = this.jwtService.decodeToken();
    if (decodeToken.isAdmin && this.tokenExists) {
      this.isAdmin = true;
    }
    if (decodeToken.email || this.tokenExists) {
      this.isLoggedIn = true;
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };

  public onLogout = () => {
    this.authService.logout();
    this.isLoggedIn = false;
    this.isAdmin = false;
  };
  handleCars() {
    this.router.navigateByUrl('/cars')
  }
  handleBookings() {
    this.router.navigateByUrl('/bookings')
  }
}
