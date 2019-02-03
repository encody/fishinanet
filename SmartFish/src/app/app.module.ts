import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectBluetoothComponent } from './connect-bluetooth/connect-bluetooth.component';
import { PondsAndCagesComponent } from './ponds-and-cages/ponds-and-cages.component';
import { NewPondOrCageComponent } from './new-pond-or-cage/new-pond-or-cage.component';
import { StartComponent } from './start/start.component';
import { PondOrCageDetailComponent } from './pond-or-cage-detail/pond-or-cage-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectBluetoothComponent,
    PondsAndCagesComponent,
    NewPondOrCageComponent,
    StartComponent,
    PondOrCageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
