 import { Component } from '@angular/core';
 import { NgForm } from "@angular/forms";

@Component({
  //moduleId: module.id,
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['../app.component.css', './contacts.component.css']
})
export class Contacts {
  title = 'Contacts';
  public user = {
    username: '',
    useremail: '',
    usermachine: '',
    gender: 'male'
  };

  public genders = [
    'male',
    'female'
  ];

  onSubmit(form: NgForm){
    console.log(this.user)
  }

}
