import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { User } from '../services/types';
import { AuthService } from '../services/auth.service';

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
