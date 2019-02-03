import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FishInA.Net';

  constructor (
    private api: ApiService,
  ) { }

  ngOnInit () {
    console.log('yeyasdf', this.api);
  }
}
