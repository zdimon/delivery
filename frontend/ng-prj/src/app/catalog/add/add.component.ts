
import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  cats: any;
  subcats = [];
  name = 'ssss';
  category: string;
  subcategory: string;

  constructor(
    private apiService: ApiService
  ) {
      this.apiService.getCategoryList().subscribe((data: any) => {
        this.cats = data;
      })
   }

  ngOnInit() {
  }

  doCatChange(evt: any) {
    for(let it of this.cats) {
      if(it.id === evt.value) {
        this.subcats = it.subcategory;
      }
    }
  }

  onImageChanged(event: any) {
    const image = event.target.files[0];
    console.log(image);
}

  submitForm(){
    console.log(this.name);
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('cat', this.category);
    formData.append('subcat', this.subcategory);
    // formData.append('images', JSON.stringify(this.images));
    this.apiService.addProduct(formData).subscribe((data: any) => {
      console.log(data);
    })
  }


}
