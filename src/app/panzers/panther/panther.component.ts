import { Component } from '@angular/core';
import { onePanzer } from '../../models/panzer';
import { PantherService } from "../../services/panzers.service";
//2  import { PANTHERS } from "../../mocks/panzers.mocks";

@Component({
  selector: 'app-panzers-2',
  templateUrl: './panther.component.html',
  styleUrls: ['./../../app.component.css', './panther.component.css'],
  providers: [PantherService]
})
export class PantherComponent {
  title = 'Panther';
  allPanzers: onePanzer[];

  constructor(private pantherService: PantherService ){}

  ngOnInit(){
    //2  this.allPanzers = PANTHERS; -брать данные напрямую с мока без сервиса (constructor выше не нужен)
    this.allPanzers = this.pantherService.getPanzers();
  }
}
