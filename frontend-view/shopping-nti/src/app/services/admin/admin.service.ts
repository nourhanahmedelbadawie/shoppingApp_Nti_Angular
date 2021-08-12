import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product'


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  commonUrl = `http://localhost:4100/`

  constructor(private _http:HttpClient) { }

  addPdt(product:Product):Observable<any>{
    return this._http.post(`${this.commonUrl}product/enter-product`, product)
  }
 
    addPromocode(code:{}):Observable<any>{
      return this._http.post(`${this.commonUrl}promo-code/enter-promo-code`, code)
    }
    
  
}

