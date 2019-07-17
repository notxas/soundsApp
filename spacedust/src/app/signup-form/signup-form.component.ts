import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { NewUser } from './../user/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  public signupForm: FormGroup;
  public signupLoading = false;
  public signupResult: any;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.signupForm = this.fb.group({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur'
      }),
      username: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  public onSubmit(): void {
    this.signupForm.controls.email.markAsDirty();
    this.signupForm.controls.username.markAsDirty();
    this.signupForm.controls.password.markAsDirty();
    if (this.signupForm.valid) {
      this.signupLoading = true;
      const { username, email, password } = this.signupForm.value;
      const newUser: NewUser = {
        username,
        email,
        password
      };
      this.authService.signup(newUser).subscribe(
        result => {
          this.signupResult = {
            message: result.message,
            state: 'success'
          };
          this.signupLoading = false;

          const { token } = result;

          this.authService.setToken(token);

          setTimeout(() => {
            this.router.navigate(['catalog']);
          }, 1500);
        },
        err => {
          this.signupResult = {
            message: err.error.message,
            state: 'error'
          };
          this.signupLoading = false;
        }
      );
    }
  }
}
