import { Injectable } from '@angular/core';
import { getDefaultService } from 'selenium-webdriver/opera';
import {  HttpClient} from '@angular/common/http';
import {  DataModel} from './model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user={email:'ved3004@gmail.com',password:3004};

  constructor(private httpClient:HttpClient) { }

  getUser():Observable<DataModel[]>{
    return this.httpClient.get<DataModel[]>('/assets/data.json')
  }
  
  
}
