import { Component } from '@angular/core';
import { onePanzer } from '../../models/panzer';
import { ALLPZIV } from "../../services/panzer.service";

@Component({
  selector: 'app-panzers-3',
  templateUrl: './pziv.component.html',
  styleUrls: ['./../../app.component.css', './pziv.component.css']
})
export class PzivComponent {
  title = 'PzIV';
  allPanzers: onePanzer[];

  ngOnInit(){
    this.allPanzers = ALLPZIV;
  }
}
