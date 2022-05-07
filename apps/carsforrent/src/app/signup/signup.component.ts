/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { CustomValidators } from '../custom-validator';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'carsforrent-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public signupValid = true;
  public pwdMatch = true;
  public isAdmin = false;
  public username = '';
  public password = '';
  public cnfPassword = '';

  registerForm = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required]),
      isAdmin: new FormControl(false),
    },
    { validators: CustomValidators.passwordsMatching }
  );
  constructor(private router: Router, private authService: AuthService) {}

  OnChange($event) {
    this.isAdmin = $event.checked;
  }
  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.authService
      .register(this.registerForm.value)
      .pipe(tap(() => this.router.navigate(['./login'])))
      .subscribe();
  }
}
