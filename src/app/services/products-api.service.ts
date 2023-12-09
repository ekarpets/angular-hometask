import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private readonly url = 'https://my-json-server.typicode.com/ekarpets/angular-hometask/products'

  constructor(private http: HttpClient) { }

  public getProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url);
  }

  public deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
