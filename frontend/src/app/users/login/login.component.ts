import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { GC_AUTH_TOKEN, GC_USER_ID } from '../../constants';
import { Apollo, gql } from 'apollo-angular';
import { Router } from '@angular/router';

const UPVOTE_POST = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser (
      input: {
        credentials: {
          email: $email,
          password: $password
        }
      }
    ) {
      token,
      user{
        id
      }
    }
  }
`;

@Component({
  selector: 'app-index',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class UsersLoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private apollo: Apollo, private router: Router) {
  }

  ngOnInit() {
  }

  confirm() {
    this.apollo.mutate({
      mutation: UPVOTE_POST,
      variables: {
        email: this.email,
        password: this.password
      }
    }).subscribe((result: any) => {
      this.saveUserData(result.data.signinUser.user.id, result.data.signinUser.token);
      this.router.navigate(['/']);
    },(error) => {
      console.log('there was an error logging in', error);
    });
  }

  saveUserData(id: string, token: string) {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
    this.authService.setUserId(id);
  }

}
