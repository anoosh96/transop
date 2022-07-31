import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_CURRENT_USER } from '../users/queries';
import { User } from '../users/types';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User = {
    id: '',
    name: '',
    email: '',
    token: ''
  };
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(currentUser => {
      this.user = currentUser;
    });
  }

}
