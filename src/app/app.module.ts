import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule,Routes}  from "@angular/router"
import {ErrorStateMatcher} from "@angular/material/core";


// imports of angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,ReactiveFormsModule}     from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatSlideToggleModule, ShowOnDirtyErrorStateMatcher}from '@angular/material';
import {HttpClientModule} from '@angular/common/http'



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Login2Component } from './login2/login2.component';
import {AuthService} from './auth.service';

const routes:Routes=[
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'login2', component:Login2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatProgressBarModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
