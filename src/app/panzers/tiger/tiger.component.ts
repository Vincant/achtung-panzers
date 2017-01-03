import { Component } from '@angular/core';
//import { PanzerPart } from '../../models/panzer-part';

@Component({
  selector: 'app-panzers',
  templateUrl: './tiger.component.html',
  styleUrls: ['./../../app.component.css', './tiger.component.css']
})
export class TigerComponent {
  title = 'Tiger';
  panzers = [
    {
      'id': 'tiger_1',
      'name':'photo: Tiger-1',
      'src':'assets/images/tiger_1.jpg',
      'number':1,
      'price':300000
    },
    {
      'id': 'tiger_2',
      'name':'photo: Tiger-2',
      'src':'assets/images/tiger_2.jpg',
      'number':2,
      'price':300000
    },
    {
      'id': 'tiger_3',
      'name':'photo: Tiger-3',
      'src':'assets/images/tiger_3.jpg',
      'number':3,
      'price':300000
    },
    {
      'id': 'tiger_4',
      'name':'photo: Tiger-4',
      'src':'assets/images/tiger_4.jpg',
      'number':4,
      'price':300000
    },
    {
      'id': 'tiger_5',
      'name':'photo: Tiger-5',
      'src':'assets/images/tiger_5.jpg',
      'number':5,
      'price':300000
    },
    {
      'id': 'tiger_6',
      'name':'photo: Tiger-6',
      'src':'assets/images/tiger_6.jpg',
      'number':6,
      'price':300000
    }
  ]
}
