import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm {
  reactiveForm : FormGroup;


  constructor(){
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      isChecked: new FormControl(false),

      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl(''),
        pincode: new FormControl('')
      }),
    });
  }

  setDefaultValue(){
    this.reactiveForm.setValue({
      firstName: "Abdul",
      lastName: "Malek",
      email: "malek@gmail.com",
      password: "1234",
      isChecked: true,
      address: {
        city: "Rajshahi",
        street: "Binodpur",
        pincode: "3333"
      }
    })
  }

  reset(){
    this.reactiveForm.reset();
  }

  onSubmit(){
    console.log(this.reactiveForm.value);
  }
}

