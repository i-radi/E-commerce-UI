import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit {
  cartDetails: any = null;
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.getLoggedUserCart().subscribe({
      next: (res) => (this.cartDetails = res.data),
      error: (err) => console.log(err),
    });
  }

  removeItem(productId:string){
    this._cartService.removeCartItem(productId).subscribe({
      next: (res) => {
        this.cartDetails = res.data;
        this._cartService.numOfCartItems.next(res.numOfCartItems);
      },
      error: (err) => console.log(err),
    })
  }

  UpdateItemCount(productId:string, count:number){
    this._cartService.UpdateItemCount(productId, count).subscribe({
      next: (res) => (this.cartDetails = res.data),
      error: (err) => console.log(err),
    })
  }
}
