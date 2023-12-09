import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IProduct, Product } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  public newProduct: IProduct = new Product(3, '', '', 0);

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  public addProduct(): void {
    this.productsService.addProduct(this.newProduct);
    this.newProduct = new Product(3, '', '', 0);
    this.goBack();
  }

  public goBack(): void {
    this.router.navigate(['/']);
  }
}
