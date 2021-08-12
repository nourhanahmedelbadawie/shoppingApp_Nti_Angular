import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private auth:AuthService, private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
if(!this.auth.loginFlag){
  alert('you didn\'t has permission')
  // this._router.navigateByUrl('/login?error=notAuth')
  this._router.navigate(["login"], {queryParams: { err: "notAuth"}})
  
return false
}
 return true;
  }
  
}
