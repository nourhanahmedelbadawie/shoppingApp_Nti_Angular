import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginFlag = false
  commonUrl = `http://localhost:4100/`
  constructor(private _http:HttpClient) { }

  login(user:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/login`, user)
  }
  signUp(user:User):Observable<any>{
    console.log("============ user =================")

    console.log(user)
    return this._http.post(`${this.commonUrl}user/register`,user)
  }
  
}
