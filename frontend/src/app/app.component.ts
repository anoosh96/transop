import { Component } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'something';
  logged: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated
      .subscribe(isAuthenticated => {
        this.logged = isAuthenticated
      });

  }

  logout() {
    this.authService.logout();
  }
}
