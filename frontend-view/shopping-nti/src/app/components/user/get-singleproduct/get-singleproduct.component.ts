import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-get-singleproduct',
  templateUrl: './get-singleproduct.component.html',
  styleUrls: ['./get-singleproduct.component.scss']
})
export class GetSingleproductComponent implements OnInit {
product:{} | any=null
pdtid:string=""
  constructor(private route: ActivatedRoute ,private _userService: UserService ,    private router: Router  ) {}
  

  ngOnInit(): void {

  this.route.params

    .subscribe(params => {
      this.pdtid=params.id
      this.getPdt(params.id)
    })

  }
  getPdt(id:string)
{
  this._userService.getSinglePdts(id).subscribe(pdt=>{
    this.product=pdt
    console.log(this.product)
  })

}
goCheckOut(){
  console.log(this.pdtid)
  this.router.navigate([`/user/checkout/${this.pdtid}`], { relativeTo: this.route });

}

}


