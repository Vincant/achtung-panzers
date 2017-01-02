import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TigerComponent} from './panzers/tiger/tiger.component'
import {PantherComponent} from './panzers/panther/panther.component';
import {PzivComponent} from './panzers/pziv/pziv.component';

const routes = [
  {path: '', redirectTo: 'tiger', pathMatch: 'full'},
  {path: 'tiger', component: TigerComponent},
  {path: 'panther', component: PantherComponent},
  {path: 'pziv', component: PzivComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

