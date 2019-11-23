import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(public fb:FormBuilder) {
   this.form = this.fb.group({
      email : this.fb.control('', Validators.required),
      mdp : this.fb.control('', Validators.required),
    });
  }

  ngOnInit() {
  }

  login() {
    const val = this.form.value;

    if(val.email && val.mdp){

    }
  }
}
