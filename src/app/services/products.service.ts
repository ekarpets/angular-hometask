import { Injectable } from '@angular/core';
import { IProduct } from '../product/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly _products$: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  public readonly products$ = this._products$.asObservable();

  get products(): IProduct[] {
    return this._products$.getValue();
  }

  private set products(products: IProduct[]) {
    this._products$.next(products);
  }

  public setProducts(products: IProduct[]): void {
    this.products = products;
  }

  public deleteProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
    console.log(this.products)
  }

  public getProductById(id: number):IProduct | undefined {
    return this.products.find(p => p.id === id);
  }

  public addProduct(newProduct: IProduct): void {
    this.products = [...this.products, newProduct];
    console.log(this.products)
  }
}
