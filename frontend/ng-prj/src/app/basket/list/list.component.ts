

import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../api.service';
import { BasketService } from './../../basket.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  basket = [];

  constructor(
    private apiService: ApiService,
    private basketService: BasketService
    ) {

    this.apiService.getBasketInfo(this.basketService.getBasket()).subscribe((rez: any) => {
      this.basket = rez;
    });


   }

  ngOnInit() {
  }

}
