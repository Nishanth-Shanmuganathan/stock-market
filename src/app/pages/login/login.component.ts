import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface LoginDetails {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  helperPassword = false;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  login() {
    if (this.loginForm.invalid) { return; }
    const loginCred: LoginDetails = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    console.log(loginCred);
  }
}
