import { Injectable } from '@angular/core';
import { onePanzer } from '../models/panzer';
import { TIGERS, PANTHERS, PZIVS } from '../mocks/panzers.mocks';

@Injectable()
export class TigerService {
  getPanzers(){
    return TIGERS;
  }
}
export class PantherService {
  getPanzers(){
    return PANTHERS;
  }
}
export class PzivService {
  getPanzers(){
    return PZIVS;
  }
}





