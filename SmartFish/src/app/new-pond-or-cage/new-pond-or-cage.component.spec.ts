import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPondOrCageComponent } from './new-pond-or-cage.component';

describe('NewPondOrCageComponent', () => {
  let component: NewPondOrCageComponent;
  let fixture: ComponentFixture<NewPondOrCageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPondOrCageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPondOrCageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
