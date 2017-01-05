import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TigerComponent } from './tiger/tiger.component';
import { PantherComponent } from './panther/panther.component';
import { PzivComponent } from './pziv/pziv.component';
import { TigerService, PantherService, PzivService } from '../services/panzers.service';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [
    TigerComponent,
    PantherComponent,
    PzivComponent
  ],
  exports: [
    TigerComponent,
    PantherComponent,
    PzivComponent
  ],
  providers: [TigerService, PantherService, PzivService]
})
export class PanzersModule { }
