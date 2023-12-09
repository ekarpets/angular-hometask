import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsApiService } from '../../services/products-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  public product?: IProduct;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ProductsApiService
  ) {}

  public ngOnInit(): void {
    const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.productsService.getProductById(Number(id));
  }

  public goBack(): void {
    this.router.navigate(['/']);
  }

  public deleteProduct(): void {
    this.apiService.deleteProduct(this.product!.id);
    this.product = undefined;
  }

  public editProduct(): void {
    this.router.navigate(['product-form']);
  }
}
