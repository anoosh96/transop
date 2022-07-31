import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class UsersNewComponent implements OnInit {
  email: string = '';
  password: string = '';
  name: string= '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  register() {
    this.authService.register(this.name, this.email, this.password);
  }
}
