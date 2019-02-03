import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-pond-or-cage',
  templateUrl: './new-pond-or-cage.component.html',
  styleUrls: ['./new-pond-or-cage.component.scss']
})
export class NewPondOrCageComponent implements OnInit {

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
  }

  request () {
    console.log(this.api);
  }
}
