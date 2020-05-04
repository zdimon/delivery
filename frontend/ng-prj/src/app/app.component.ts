
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Dima';
  productList = {results: []};

  constructor(private http: HttpClient) { 
    this.getProductList();
  }

  getProductList() {

     this.http.get(`${environment.backendUrl}v1/market/product_list`).subscribe((res: any) => {
        this.productList = res;
        console.log(this.productList);
     });
  }



}
