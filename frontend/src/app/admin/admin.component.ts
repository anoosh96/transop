import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GET_COMMUNITY_BY_USER_ID_QUERY } from './queries';
import { GET_CURRENT_USER } from '../users/queries';
import { User } from '../users/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  community: string = '';
  user: User = {
    id: '',
    name: '',
    email: '',
    token: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // starts user get
    this.authService.currentUser.subscribe(currentUser => {
      this.user = currentUser;
    });
  }
}
