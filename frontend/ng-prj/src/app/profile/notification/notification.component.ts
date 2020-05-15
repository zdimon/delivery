import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications = [];

  constructor(private apiService: ApiService) { 
    this.apiService.notifyList().subscribe((data: any) => {
      this.notifications = data.results;
    });
   }

  ngOnInit() {
  }

}
