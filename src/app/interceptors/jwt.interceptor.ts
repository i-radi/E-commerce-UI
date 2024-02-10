import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token:any = localStorage.getItem('token')

    if(token === null){
      return next.handle(request);
    }

    let updatedRequest = request.clone({
      headers: request.headers.set('token', token)
    });
    return next.handle(updatedRequest);
  }
}
