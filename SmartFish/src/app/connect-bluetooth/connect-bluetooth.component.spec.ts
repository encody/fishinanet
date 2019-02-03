import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectBluetoothComponent } from './connect-bluetooth.component';

describe('ConnectBluetoothComponent', () => {
  let component: ConnectBluetoothComponent;
  let fixture: ComponentFixture<ConnectBluetoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectBluetoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectBluetoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
