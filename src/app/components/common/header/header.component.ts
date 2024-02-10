import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  isLogin:boolean = false;
  numOfitems :number = 0;
  
  constructor(private _authService:AuthService, private _cartService:CartService){}
  
  ngOnInit(): void {
      this._authService.isAuthorized.subscribe({
        next:() => this.isLogin = this._authService.isAuthorized.getValue() 
      });

      this._cartService.numOfCartItems.subscribe({
        next:(num)=> this.numOfitems = num
      })
  }

  logout(){
    this._authService.logout();
  }
}
