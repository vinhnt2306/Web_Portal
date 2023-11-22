import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  cartProductsByInvoice: any[] = [];

  sum = 0;

  constructor(
    private cartService: CartService,
    private route: Router){}

  ngOnInit(){
    this.cartService.getCartItem().subscribe((response: any) => {
      this.cartProductsByInvoice = response.data.cartItem
      console.log(this.cartProductsByInvoice)
      this.sum = response.data.cartItem.reduce((next:any,prev:any)=>{return (next+prev.price*prev.quantity)},0)
    })
  }
  checkOutPayment() {
    this.route.navigateByUrl("/payment-order")
  }
}
