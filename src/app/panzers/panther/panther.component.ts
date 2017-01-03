import { Component } from '@angular/core';
import { onePanzer } from '../../models/panzer';
import { ALLPANTHER } from "../../services/panzer.service";

@Component({
  selector: 'app-panzers-2',
  templateUrl: './panther.component.html',
  styleUrls: ['./../../app.component.css', './panther.component.css']
})
export class PantherComponent {
  title = 'Panther';
  allPanzers: onePanzer[];

  ngOnInit(){
    this.allPanzers = ALLPANTHER;
  }
}
