 import { Component } from '@angular/core';
 import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from "@angular/forms";

@Component({
  //moduleId: module.id,
  selector: 'app-contacts2',
  templateUrl: './contacts2.component.html',
  styleUrls: ['../app.component.css', './contacts2.component.css'],
})
export class Contacts2 {
  title = 'Contacts 2';

  genders = [
    'male',
    'female'
  ];

  myForm: FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      'username': new FormControl('Vincant', Validators.required),
      'useremail': new FormControl('', Validators.required),
      'usermachine': new FormControl('', Validators.required),
      'gender': new FormControl('male'),
      'favorite': new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    console.log(this.myForm);
  }




}

