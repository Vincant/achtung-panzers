import { Component, Input } from '@angular/core';
import { oneTank } from '../../models/tank';
import { T34Service } from '../../services/tanks.service';

@Component({
  selector: 'app-panzers-4',
  templateUrl: './t34.component.html',
  styleUrls: ['./../../app.component.css', './t34.component.css']
})
export class T34Component {
  title = 'T-34';
  allTanks: oneTank[];

  constructor(private t34Service: T34Service){}

  ngOnInit(){
    this.allTanks = this.t34Service.getTanks();
  }

}
