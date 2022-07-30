import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class UsersLoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  confirm() {
    this.authService.tryLogin(this.email, this.password);
  }

}
