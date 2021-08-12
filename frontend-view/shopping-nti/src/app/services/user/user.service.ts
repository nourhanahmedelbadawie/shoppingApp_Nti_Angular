import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  commonUrl = `http://localhost:4100/`

  constructor(private _http:HttpClient) { }
  getAllPdts():Observable<any>{
    return this._http.get(`${this.commonUrl}product/allproducts`)
  } 
   getSinglePdts(id:any):Observable<any>{
    return this._http.get(`${this.commonUrl}product/allproducts/${id}`)
  }
  checkOut(totalpdt:any):Observable<any>{
    return this._http.post(`${this.commonUrl}check-out` ,totalpdt)
  }
 
}
// https://picsum.photos/200/300?random=1
