import { Injectable } from '@angular/core';
import { onePanzer } from '../models/panzer';
import { T34 } from '../mocks/tanks.mocks';

@Injectable()
export class T34Service {
  getTanks(){
    return T34;
  }
}






