import { Component, OnInit, Input } from '@angular/core';
import { Habitat } from '../habitat';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-pond-or-cage-detail',
  templateUrl: './pond-or-cage-detail.component.html',
  styleUrls: ['./pond-or-cage-detail.component.scss']
})

export class PondOrCageDetailComponent implements OnInit {
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
 