import { Component, OnInit, Input } from '@angular/core';
import { Habitat } from '../habitat';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-new-pond-or-cage',
  templateUrl: './new-pond-or-cage.component.html',
  styleUrls: ['./new-pond-or-cage.component.scss']
})
export class NewPondOrCageComponent implements OnInit {
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
 