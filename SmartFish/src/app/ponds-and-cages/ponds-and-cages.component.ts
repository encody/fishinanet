import { Component, OnInit } from '@angular/core';
import { PondOrCageDetailComponent } from '../pond-or-cage-detail/pond-or-cage-detail.component';
import { Habitat } from '../habitat';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-ponds-and-cages',
  templateUrl: './ponds-and-cages.component.html',
  styleUrls: ['./ponds-and-cages.component.scss']
})
export class PondsAndCagesComponent implements OnInit {
    habitatId: number = null;
    habitats: Observable<any[]>;
    selectedHabitat: Habitat;


constructor(private api: ApiService) { }

  ngOnInit() {
    this.getHabitats();
  }
  getHabitats(){

   this.habitats = this.api.getAll<any>('habitat');
   

}
}
 