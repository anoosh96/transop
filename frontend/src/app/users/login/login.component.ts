import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { GC_AUTH_TOKEN, GC_USER_ID } from '../../constants';
import { Apollo } from 'apollo-angular';
import { LOGIN_USER_QUERY } from './queries'

@Component({
  selector: 'app-index',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class UsersLoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private apollo: Apollo) {}

  ngOnInit() {}

  confirm() {
    this.apollo.mutate({
      mutation: LOGIN_USER_QUERY,
      variables: {
        email: this.email,
        password: this.password
      }
    }).subscribe((result: any) => {
      if (result.data.signinUser){
        this.authService.login(result.data.signinUser.user.id, result.data.signinUser.token);
      } else {
        alert("Failed to log in!");
      }
    },(error) => {
      alert(`there was an error logging in. ${error}`);
    });
  }

}
