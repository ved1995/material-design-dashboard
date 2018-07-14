import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.createSignupForm();
  }
  createSignupForm(){
    this.signupForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:[''],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    });
  }

  signup(){
    console.log('signup working ');
  }

}
