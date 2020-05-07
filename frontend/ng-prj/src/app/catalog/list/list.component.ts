
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productList = {results: []};

  constructor(
    private http: HttpClient, 
    private apiService: ApiService,
    private route: ActivatedRoute){
    
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('catId')) {
        this.getProductList({cat:params.catId});
      }
      else if (params.hasOwnProperty('SubCatId')) {
        this.getProductList({subcat:params.SubCatId});
      }
      else {
        this.getProductList({});
      }
      
    });
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //      // console.log(this.route.snapshot.paramMap.get('catId'));


    //   }
      
    // });
  }

  ngOnInit() {
  }

  getProductList(pars) {

      this.apiService.getProduclList(pars).subscribe((res: any) => {
        this.productList = res;
    });


 }

}
