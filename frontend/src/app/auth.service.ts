import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { GC_AUTH_TOKEN, GC_USER_ID } from './constants';
import { Router } from '@angular/router';

@NgModule()
export class AuthService {
  private userId: string = '';
  private _isAuthenticated = new BehaviorSubject(false);

  constructor(private router: Router) {}

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  login(id: string, token: string) {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
    this.setUserId(id);
    this.router.navigate(['/']);
  }

  setUserId(id: string) {
    this.userId = id;
    this._isAuthenticated.next(true);
  }

  logout() {
    localStorage.removeItem(GC_USER_ID);
    localStorage.removeItem(GC_AUTH_TOKEN);
    this.userId = '';
    this._isAuthenticated.next(false);
  }

  autoLogin() {
    const id = localStorage.getItem(GC_USER_ID);

    if (id) {
      this.setUserId(id);
    }
  }

  doubleCheckAuthenticated() {
    if (this.userId.trim().length == 0) {
      this._isAuthenticated.next(false);
      this.router.navigate(['/']); 
    }
  }
}