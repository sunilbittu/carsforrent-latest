import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtService: JwtHelperService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}
  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/auth/login', loginRequest).pipe(
      tap((res: LoginResponse) => {
        localStorage.setItem('token', res.token);
      }),
      tap(() =>
        this.snackbar.open('Login Successfull', 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        })
      ),
      tap((res: LoginResponse) =>
        res.user.isAdmin
          ? this.router.navigateByUrl('/cars')
          : this.router.navigateByUrl('/search')
      )
    );
  }
  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http
      .post<RegisterResponse>('/api/auth/register', registerRequest)
      .pipe(
        tap((res: RegisterResponse) =>
          localStorage.setItem('token', res.token)
        ),
        tap(() =>
          this.snackbar.open(`User created successfully`, 'Close', {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          })
        ),
        tap((res: RegisterResponse) =>
          res.user.isAdmin
            ? this.router.navigateByUrl('/cars')
            : this.router.navigateByUrl('/search')
        )
      );
  }
  /*
   Get the user fromt the token payload
   */
  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return { email: decodedToken.email, isAdmin: decodedToken.isAdmin };
  }

  logout() {
    // Removes the jwt token from the local storage, so the user gets logged out & then navigate back to the "public" routes
    localStorage.removeItem('token');
    this.router.navigate(['../../']);
  }

  isAuthorized(allowedRoles: string[]): boolean {
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }
    const decodeToken = this.jwtService.decodeToken();
    if (!decodeToken?.email) {
      return false;
    }
    return allowedRoles[0]['isAdmin'] === decodeToken['isAdmin'];
  }
}
