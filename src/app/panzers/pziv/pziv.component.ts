import { Component } from '@angular/core';
import { onePanzer } from '../../models/panzer';
import { PzivService } from "../../services/panzers.service";

@Component({
  selector: 'app-panzers-3',
  templateUrl: './pziv.component.html',
  styleUrls: ['./../../app.component.css', './pziv.component.css'],
  providers: [PzivService]
})
export class PzivComponent {
  title = 'PzIV';
  allPanzers: onePanzer[];

  constructor(private pzivService: PzivService){}

  ngOnInit(){
    this.allPanzers = this.pzivService.getPanzers();
  }
}
