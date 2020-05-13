import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuth$ = new BehaviorSubject(false);
  storage: any;

  constructor() { 
    this.storage = sessionStorage;
   }

  getToken(): string {
      return this.storage.getItem('access_token');
  }

  setToken(value: string) {
      this.storage.setItem('access_token', value);
  }

  login(user: any) {
    this.isAuth$.next(true);
    this.setToken(user.token);
  }


  logout() {
    this.isAuth$.next(false);
    this.storage.removeItem('access_token');
  }




}
