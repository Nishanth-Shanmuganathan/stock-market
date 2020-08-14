import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface RegisterDetails {
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  helperPassword = false;
  helperConfirmPassword = false;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    });
  }

  register() {
    if (this.registerForm.invalid) { return; }
    const registerCred: RegisterDetails = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirmPassword,
    };
    console.log(registerCred);
  }
}
