import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
logout:boolean= this.auth.loginFlag?true :false
  constructor(    private auth: AuthService,
    ) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem("token");
    this.auth.loginFlag=false

  }
}
