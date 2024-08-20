import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { luhnValidator } from '../../shared/luhn.validator';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      age: ['',],
      cardNum: ['',luhnValidator],
      expDate: ['',],
    });
  }
  

 
}
