import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GET_COMMUNITY_BY_USER_ID_QUERY } from './queries';
import { GET_CURRENT_USER } from '../users/queries';
import { User } from '../users/types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  community: string = '';
  currentUser: User = this.authService.currentUser;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

}
