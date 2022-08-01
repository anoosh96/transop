import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  logged: boolean = false;
  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.subscription = this.authService.isAuthenticated.subscribe(isAuthenticated => {
      this.logged = isAuthenticated
    });
  }

  logout() {
    this.authService.logout();
  }

  navigateToProfile() {
    this.router.navigate(['/users/profile']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
