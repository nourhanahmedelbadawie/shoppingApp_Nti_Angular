import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-get-allproduct',
  templateUrl: './get-allproduct.component.html',
  styleUrls: ['./get-allproduct.component.scss']
})
export class GetAllproductComponent implements OnInit {
  products:[] | any =[]

  constructor( private _userService: UserService) {
    this._userService.getAllPdts().subscribe(data=>{
      this.products = data.data
       
      })

  }


  ngOnInit(): void {


  }

}
