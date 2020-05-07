

import { Component } from '@angular/core';

import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  categories = [];

  constructor(private apiService: ApiService) {
    this.apiService.getCategoryList().subscribe((res: any) => {
      this.categories = res;
    });
  }

}
