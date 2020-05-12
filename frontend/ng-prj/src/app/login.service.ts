import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuth$ = new BehaviorSubject(false);

  constructor() { }

  login(user: any){
    this.isAuth$.next(true);
  }

  logout(){
    this.isAuth$.next(false);
  }
}
