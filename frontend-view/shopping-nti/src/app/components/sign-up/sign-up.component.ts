import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroupDirective,
  NgForm,
  FormControl,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

// import {ErrorStateMatcher} from '@angular/material';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  msg: string = '';
  Viewsignup: boolean = false;
  activeAdmin: boolean | any = null;

  constructor(
    private _roter: Router,
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  userData = this.fb.group({
    name: ['', [Validators.required, Validators.min(2), Validators.max(20)]],

    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required],
    phone: ['', Validators.min(12)],
    addresses: [''],
    birthDate: ['', Validators.required],
  });
  signup() {
    let signedUpUser: User = {
      name: this.userData.value.name,
      // birtrhDate: this.userData.value.birthDate,
      password: this.userData.value.pass,
      email: this.userData.value.email,
      phone: this.userData.value.phone,
      // addresses: [this.userData.value.addresses],

      isAdmin: this.activeAdmin,
    };

    if (this.userData.valid) {
      console.log(typeof this.userData.value.pass);
      this.auth.signUp(signedUpUser).subscribe(
        (response) => {
          this.auth.loginFlag = true;
          console.log('============ data =============');

          console.log(response);
        },
        (e) => {
          console.log('============ error =============');
this.showError()
          console.log(e);
        },
        () => {
          console.log('done');

          this.activeAdmin
            ? this._roter.navigate(['/admin'])
            : this._roter.navigate(['/user']);
        }
      );
    } else {
      this.msg = 'please check your data';
    }
  }


  setActiveUser() {
    this.activeAdmin = false;
    this.Viewsignup = true;
  }
  setActivAdmin() {
    this.activeAdmin = true;
    this.Viewsignup = true;
  }
  showError() {
    this.toastr.error('Invalid data');
  }
}
