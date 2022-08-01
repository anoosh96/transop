import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { GC_TOGGLE_SIDEBAR } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  drawerOpened: boolean = localStorage.getItem(GC_TOGGLE_SIDEBAR) == "true";
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

  toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
    localStorage.setItem(GC_TOGGLE_SIDEBAR, String(this.drawerOpened));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
