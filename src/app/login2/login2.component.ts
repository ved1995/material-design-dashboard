import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, FormGroup,Validators,FormsModule,NgForm,FormGroupDirective} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  loginform:FormGroup;
  Email:string='';
  Password:string='';
  isAccepted:number=0;
  validation_error_message={
    Email:[
      {type:'required', message:'Email is required'},
      {type:'valid', message:'provide valid email'}
    ],
    password:[
      {type:'required',message:'password is required'}
    ]
  
  }

  constructor(private formbuilder:FormBuilder) {
    this.loginform=formbuilder.group({
      Email:['',Validators.compose([Validators.required,Validators.email])]
    })
   }

  ngOnInit() {
  }
  
  onFormSubmit(form:NgForm){
    console.log(form);
  }
      
    
matcher=new MyErrorStateMatcher();
  

}
