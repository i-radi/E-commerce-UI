import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from './urls';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  getall(): Observable<any> {
    return this._httpClient.get(urls.base + urls.products);
  }

  getById(id: string): Observable<any> {
    return this._httpClient.get(urls.base + urls.product + `/${id}`);
  }
}
