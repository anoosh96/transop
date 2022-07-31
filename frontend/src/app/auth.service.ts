import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { GC_AUTH_TOKEN, GC_USER_ID } from './constants';
import { Router } from '@angular/router';
import { User } from './users/types';
import { Apollo } from 'apollo-angular';
import { LOGIN_USER_QUERY_BY_EMAIL_PASSWORD, GET_CURRENT_USER } from './users/queries'


@NgModule()
export class AuthService {
  private _isAuthenticated = new BehaviorSubject(false);
  private _currentUser = new BehaviorSubject({id: "", name: "", email: "", token: ""});

  constructor(private router: Router, private apollo: Apollo) {}

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  get currentUser(): Observable<User>{
    return this._currentUser.asObservable();
  }

  tryLogin(email: string, password: string) {
    this.apollo.mutate({
      mutation: LOGIN_USER_QUERY_BY_EMAIL_PASSWORD,
      variables: {
        email: email,
        password: password
      }
    }).subscribe((result: any) => {
      if (result.data.signinUser){
        this.login(result.data.signinUser);
      } else {
        alert("Failed to log in!");
      }
    },(error) => {
      alert(`there was an error logging in. ${error}`);
    });
  }

  logout() {
    localStorage.removeItem(GC_USER_ID);
    localStorage.removeItem(GC_AUTH_TOKEN);
    this._isAuthenticated.next(false);
  }

  autoLogin() {
    const local_id = localStorage.getItem(GC_USER_ID);
    const local_token = localStorage.getItem(GC_AUTH_TOKEN);

    if (local_id && local_id.trim().length > 0 && local_token && local_token.trim().length > 0 ){
      this.apollo.watchQuery<any>({
        query: GET_CURRENT_USER,
        variables: {
          local_id: local_id,
          local_token: local_token
        }
      })
        .valueChanges
        .subscribe(({ data, loading }) => {
          this.setUser(
            data.currentUser.id, 
            data.currentUser.name,
            data.currentUser.email,
            data.currentUser.token
          );
        },(error) => {
          console.log(`there was an error getting current user from server. ${error}`);
        });
    }
  }

  private login(data: any) {
    localStorage.setItem(GC_USER_ID, data.user.id);
    localStorage.setItem(GC_AUTH_TOKEN, data.token);
    this.setUser(data.user.id, data.user.name, data.user.email, data.token);
    this.router.navigate(['/']);
  }

  private setUser(id: string, name: string, email: string, token: string) {
    const currentUser = {
      id: id,
      name: name,
      email: email,
      token: token
    };

    this._currentUser.next(currentUser);
    this._isAuthenticated.next(true);
  }
}