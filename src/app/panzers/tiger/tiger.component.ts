import { Component } from '@angular/core';
import { onePanzer } from '../../models/panzer';
import { ALLTIGER } from '../../services/panzer.service';

@Component({
  selector: 'app-panzers',
  templateUrl: './tiger.component.html',
  styleUrls: ['./../../app.component.css', './tiger.component.css']
})
export class TigerComponent {
  title = 'Tiger';
  allPanzers: onePanzer[];

  ngOnInit(){
    this.allPanzers = ALLTIGER;
  }
}
