import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserViewComponent implements OnInit {

  constructor() {}
  widthsidebar:string="250px"

  ngOnInit(): void {}
  /* Set the width of the side navigation to 250px */
  openNav() {
 this.widthsidebar = "250px";
 console.log(this.widthsidebar)
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
  this.widthsidebar = "0";
  console.log(this.widthsidebar)

  }
}
