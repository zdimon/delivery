


import { Component } from '@angular/core';

import { ApiService } from './api.service';

import { BasketService } from './basket.service';

import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  categories = [];
  basket = [];
  isAuth = false;

  constructor(
    private apiService: ApiService,
    private basketService: BasketService,
    private authService: AuthService,
    private loginService: LoginService
    ) { 
    this.apiService.getCategoryList().subscribe((res: any) => {
      this.categories = res;
    });

    this.basketService.basket$.subscribe((data) => {
        this.basket = data;
      }
    );

    this.apiService.init().subscribe((data: any) => {
      this.loginService.login({token: data.token});
    });

    this.loginService.isAuth$.subscribe(data => {
       this.isAuth = data;
    });


    
  }

  signInWithGoogle(): void {
    console.log('login with google');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
       this.authService.authState.subscribe(user => {
          
          this.apiService.loginByGoogle(user).subscribe((rez) => {
            this.loginService.login(rez);
          })

       })
    });
  }

  logout() {
    this.loginService.logout();
  }

}
