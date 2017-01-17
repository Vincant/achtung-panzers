 import { Component } from '@angular/core';
 import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";
 import { Observable } from "rxjs/Rx";

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

  //constructor(){
    //this.myForm = new FormGroup({
    //  'username': new FormControl('Vincant', Validators.required),
    //  'useremail': new FormControl('', Validators.required),
    //  'usermachine': new FormControl(''),
    //  'gender': new FormControl('male'),
    //  'hobbies': new FormArray([
	//  	new FormControl('panzers', Validators.required)
	//	])
    //});
  //}  // just diferent way to creating form.  (same resultate 21-31 === 33-42)
	
  constructor(private formBuilder: FormBuilder){
	this.myForm = formBuilder.group({
      'username': ['Vincant', Validators.required],
      'useremail': ['', Validators.required],
      'usermachine': [''],
      'gender': ['male'],
      'hobbies': formBuilder.array([
		['panzers', Validators.required]
	  ])
    });
	
	this.myForm.valueChanges.subscribe( (data: any) => console.log(data) );    // for detect changes in real time, after each action
	this.myForm.statusChanges.subscribe( (data: any) => console.log(data) );    // for detect state form valid or not
	
  }

  onAddHobby(){
	(<FormArray>this.myForm.controls['hobbies']).push( new FormControl('', Validators.required) );
  }
  
  reset(){
	//this.myForm.reset();   //just reset to empty
	this.myForm.reset({username: 'Vincy', usermachine: 'Tiger', gender: 'male'});   // reset to some values
  }
  
  onSubmit(){
    console.log(this.myForm);
  }




}

