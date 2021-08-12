import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  product:{} | any=null
  pdtid:string=""
    constructor(private  router: Router ,private route: ActivatedRoute ,private _userService: UserService ) {}
    
  
    ngOnInit(): void {
  
    this.route.params
  
      .subscribe(params => {
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
  checkOut(){
    let totalpdts={
      products:[{
        category:this.product.category,
        price:this.product.priceAfterSale,
       size:this.product.sizes[0],
        color:this.product.colors[0],
       type:this.product.type
      }],
      totalPrice:3000
    }
    
      this._userService.checkOut(totalpdts).subscribe((response) => {
        console.log('============ data =============');
    
        console.log(response);
      },
      (e) => {
        console.log('============ error =============');
    
        console.log(e);
      },
      () => {
        console.log('done');
        alert('done');
        this.router.navigate([`/user/products`], { relativeTo: this.route });

      }
    )
    }
}
