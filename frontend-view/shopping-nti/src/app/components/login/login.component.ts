import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import {
  Validators,
  FormBuilder,
  FormGroupDirective,
  NgForm,
  FormControl,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  msg:string=""
 ViewLogin:boolean=false
activeAdmin:boolean=false

  constructor( private _roter:Router ,private toastr: ToastrService ,private fb: FormBuilder, private auth: AuthService) {
    if(localStorage.getItem('token')) {
      this.activeAdmin?    _roter.navigate(['/admin']):_roter.navigate(['/user'])
    }

  }

  userData = this.fb.group({

    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required],
  
 
  });
 
  ngOnInit(): void {
  }


  login(){
  let loginedUser={
    password: this.userData.value.pass,
    email: this.userData.value.email,
  }
  if (this.userData.valid) {
    console.log(typeof this.userData.value.pass);
    this.auth.login(loginedUser).subscribe(
      (response) => {
        localStorage.setItem('token', response.data.token);
        this.auth.loginFlag = true;
        console.log('============ data =============');

        console.log(response);
      },
      (e) => {
        console.log('============ error =============');

        console.log(e);
        this.showError()

      },
      () => {
        console.log('done');
        this.activeAdmin?   this. _roter.navigate(['/admin']):this._roter.navigate(['/user'])

      }
    );
  } else {
    this.msg = 'please check your data';
  }
}




setActiveUser(){
  this.activeAdmin=false;
  this.ViewLogin=true
}
setActivAdmin(){
  this.activeAdmin=true;
  this.ViewLogin=true

}
showError() {
  this.toastr.error('Invalid email');
}
}
