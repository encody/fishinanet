import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public session: {} | false;

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.api.getSession().subscribe(s => {
      this.session = s;
    });
  }

  logOut () {
    this.api.logout().subscribe(() => this.session = false);
  }

  logIn (userName: string, pass: string) {
    this.api.login(userName, pass).pipe(flatMap(() => this.api.getSession())).subscribe(s => {
      this.session = s;
    });
  }
}
