import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../services/types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user: User = {
    id: '',
    name: '',
    email: '',
    token: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // starts user get
    this.authService.currentUser.subscribe(currentUser => {
      this.user = currentUser;
    });
  }
}
