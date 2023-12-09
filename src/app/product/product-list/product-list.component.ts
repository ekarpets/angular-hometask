import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product.model';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ProductsApiService } from '../../services/products-api.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  public products$: Observable<IProduct[]> = this.productsService.products$;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private apiService: ProductsApiService,
  ) {}

  public ngOnInit(): void {
  
      this.apiService.getProduct().subscribe(p => this.productsService.setProducts(p));


    console.log('oninit');
  }
  
  public deleteProduct(id: number): void {
    this.productsService.deleteProduct(id);
    this.apiService.deleteProduct(id);
  }

  public navigateToProduct(id: number): void {
    this.router.navigate(['product', id]);
  }

  public createNewProduct(): void {
    this.router.navigate(['product-form']);
  }
}
