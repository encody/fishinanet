import { Component, OnInit, Input } from '@angular/core';
import { Habitat } from '../habitat';

@Component({
  selector: 'app-pond-or-cage-detail',
  templateUrl: './pond-or-cage-detail.component.html',
  styleUrls: ['./pond-or-cage-detail.component.scss']
})

export class PondOrCageDetailComponent implements OnInit {
  @Input() habitat: Habitat;

  constructor() { }

  ngOnInit() {
  }

}
