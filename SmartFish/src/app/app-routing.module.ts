import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PondsAndCagesComponent }   from './ponds-and-cages/ponds-and-cages.component';
import { PondOrCageDetailComponent } from './pond-or-cage-detail/pond-or-cage-detail.component';
import { NewPondOrCageComponent }   from './new-pond-or-cage/new-pond-or-cage.component';
import { ConnectBluetoothComponent }   from './connect-bluetooth/connect-bluetooth.component';
import { StartComponent }   from './start/start.component';


const routes: Routes = [
{ path: 'ponds-and-cages', component: PondsAndCagesComponent },
{ path: 'ponds-and-cages/:id', component: PondOrCageDetailComponent },
{ path: 'new-pond-or-cage', component: NewPondOrCageComponent },
{ path: 'connect-bluetooth', component: ConnectBluetoothComponent },
{ path: 'start', component: StartComponent },
{ path: '', redirectTo: '/new-pond-or-cage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
