import { UIService } from './ui.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from './../../environments/environment';

interface RegisterDetails {
  email: string;
  password: string;
  confirmPassword: string;
}

interface LoginDetails {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string;
  loggedIn = new Subject<string>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private uiService: UIService) { }

  registerUser(auth: RegisterDetails) {
    return this.http
      .post<{ token: string }>(
        environment.server_url + 'authentication/register',
        auth
      )
      .pipe(
        tap((res) => {
          this.token = res.token;
          localStorage.setItem('token', this.token);
          this.loggedIn.next(this.token);
          console.log('token fetched');
        })
      );
  }

  loginUser(auth: LoginDetails) {
    return this.http
      .post<{ token: string }>(
        environment.server_url + 'authentication/login',
        auth
      )
      .pipe(
        tap((res) => {
          this.token = res.token;
          localStorage.setItem('token', this.token);
          this.loggedIn.next(this.token);
        })
      );
  }

  readToken() {
    const token = localStorage.getItem('token');
    if (!token) { return; }
    this.token = token;
    this.loggedIn.next(token);
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.loggedIn.next();
    if (!this.token) {
      this.uiService.message('Logout successful...');
      this.router.navigate(['auth', 'login']);
    }
  }

}
