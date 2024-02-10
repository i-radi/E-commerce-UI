import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass'],
})
export class CheckoutComponent {
  cartId: string = '';

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  });

  constructor(private _cartService: CartService) {}

  handleSubmit(shippingAddress: FormGroup) {
    this._cartService
    .onlinePayment(shippingAddress.value, this._cartService.CartId.getValue())
    .subscribe({
      next: (res) => this.navigateToPage(res.session.url),
      error: (err) => console.log(err),
    })
  }

  navigateToPage(url:string){
    window.location.href = url;
  }
}
