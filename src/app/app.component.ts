import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stock-market';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.readToken();
  }
}
