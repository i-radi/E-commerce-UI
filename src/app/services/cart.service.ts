import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { urls } from './urls';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  numOfCartItems = new BehaviorSubject(0);
  CartId = new BehaviorSubject('');
  constructor(private _httpClient: HttpClient) {
    this.getLoggedUserCart().subscribe({
      next: (res) => {
        this.numOfCartItems.next(res.numOfCartItems);
        this.CartId.next(res.data._id);
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }

  addToCart(productId: string): Observable<any> {
    return this._httpClient.post(urls.base + urls.cart, {
      productId: productId,
    });
  }

  getLoggedUserCart(): Observable<any> {
    return this._httpClient.get(urls.base + urls.cart);
  }

  removeCartItem(productId: string): Observable<any> {
    return this._httpClient.delete(urls.base + urls.cart + `/${productId}`);
  }

  UpdateItemCount(productId: string, count: number): Observable<any> {
    return this._httpClient.put(urls.base + urls.cart + `/${productId}`, {
      count: count,
    });
  }

  onlinePayment(shippingAddress: any, cartId: string): Observable<any> {
    return this._httpClient.post(
      urls.base + urls.onlinePayment + `${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: shippingAddress,
      }
    );
  }
}
