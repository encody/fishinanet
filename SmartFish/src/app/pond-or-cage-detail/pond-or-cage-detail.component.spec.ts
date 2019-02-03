import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PondOrCageDetailComponent } from './pond-or-cage-detail.component';

describe('PondOrCageDetailComponent', () => {
  let component: PondOrCageDetailComponent;
  let fixture: ComponentFixture<PondOrCageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PondOrCageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PondOrCageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
