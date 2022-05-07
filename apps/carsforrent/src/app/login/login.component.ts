/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'carsforrent-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorExist = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private authService: AuthService, private _router: Router) {}

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    try {
      this.authService.login(this.loginForm.value).pipe().subscribe();
      /* .pipe(
          tap(() => {
            this._router.navigateByUrl('/');
          })
        ) */
    } catch (error) {
      this.errorExist = true;
    }
  }

  public onSignup(): void {
    this._router.navigateByUrl('/signup');
  }
}
