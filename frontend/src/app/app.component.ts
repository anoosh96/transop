import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  logged: boolean = false;
  subscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.subscription = this.authService.isAuthenticated.subscribe(isAuthenticated => {
      this.logged = isAuthenticated
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
