import { Component, Input } from '@angular/core';
import { onePanzer } from '../../models/panzer';
import { TigerService } from '../../services/panzers.service';

@Component({
  selector: 'app-panzers',
  templateUrl: './tiger.component.html',
  styleUrls: ['./../../app.component.css', './tiger.component.css'],
  providers: [TigerService]
})
export class TigerComponent {
  title = 'Tiger';
  @Input() subtitle = '';
  allPanzers: onePanzer[];

  constructor(private tigerService: TigerService){}

  ngOnInit(){
    this.allPanzers = this.tigerService.getPanzers();
  }

  zoomImage(){

  }
  downQuantity(onePanzer){
    if(onePanzer.inStock > 0){
      onePanzer.inStock--;
    }
  }
  upQuantity(onePanzer){
    if(onePanzer.inStock < 10){
      onePanzer.inStock++;
    }
  }
}
