import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PondsAndCagesComponent } from './ponds-and-cages.component';

describe('PondsAndCagesComponent', () => {
  let component: PondsAndCagesComponent;
  let fixture: ComponentFixture<PondsAndCagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PondsAndCagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PondsAndCagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
