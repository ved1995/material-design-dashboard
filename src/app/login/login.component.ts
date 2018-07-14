import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormGroupDirective,NgForm, FormControl } from '@angular/forms';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginFormEmail:FormGroup;
  loading:boolean=true;
  Email:string='';
  Password:string='';
  tab:number=0;
  user;
  userName='';
  password='';
  

  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder) {
    
    
   }
  ngOnInit() {
    this.user=this.authService.getUser();
    this.userName=this.user.email;
    this.password=this.user.password;

    this.createLoginFormEmail();
    this.createLoginForm();
  }
  createLoginFormEmail(){
    this.loginFormEmail=this.formBuilder.group({
      Email:['',Validators.compose([Validators.required,Validators.email]) ] 
    });
    
  }

  createLoginForm(){
   this.loginForm=this.formBuilder.group({
    Password:['',Validators.required]
   });
  }
  loginEmail(){
    console.log('checking email: ',this.loginFormEmail.value);
    if(this.loginFormEmail.value.Email==this.userName){
      this.tab=1;
      console.log('Email is correct');
    }
    
  }
  login(){
    
  }


}
