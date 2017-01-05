import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { T34Component } from './t-34/t34.component';
import { T34Service } from '../services/tanks.service';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [
    T34Component
  ],
  exports: [
    T34Component
  ],
  providers: [T34Service]
})
export class TanksModule { }
