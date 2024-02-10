import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{

  products: Product[] = [];
  searchTerm: string = '';
  constructor(private _productService:ProductService, private _cartService:CartService){}
  
  ngOnInit(): void {
    this._productService.getall().subscribe({
      next:(res) => this.products = res.data
    });
  }

  addToCart(productId:string){
    this._cartService.addToCart(productId).subscribe({
      next:(res)=>
      {
        console.log(res),
        this._cartService.numOfCartItems.next(res.numOfCartItems)
      },
      error:(err)=>console.log(err)
    })
  }
}
