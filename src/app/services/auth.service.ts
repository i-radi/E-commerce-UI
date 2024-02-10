import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { urls } from './urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isAuthorized = new BehaviorSubject<boolean>(false);

  constructor(private _httpClient:HttpClient, private _router:Router) {
    this.getToken();
  }

  register(request:Object):Observable<any>{
    return this._httpClient.post(urls.base + urls.register, request)
  }

  login(request:Object):Observable<any>{
    return this._httpClient.post(urls.base + urls.login, request)
  }

  setToken(token:string):void{
    localStorage.setItem('token', token);
    this.isAuthorized.next(true);
  }

  getToken():string|null{
    let token = localStorage.getItem('token');
    if (token == null)return null;
    this.isAuthorized.next(true);
    return token;
  }

  logout():void{
    localStorage.removeItem('token');
    this.isAuthorized.next(false);
    this._router.navigate(['/login'])
  }
}
