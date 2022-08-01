import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../services/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  subscription: Subscription;
  user: User = {
    id: '',
    name: '',
    email: '',
    token: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.currentUser.subscribe(currentUser => {
      this.user = currentUser;
      this.authService.enforceLoggedIn();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
