import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';
import { StoreService } from '../../../services/store.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryId: string | null = null;
  limit: number = 10;
  offset: number = 0;

  products: IProduct[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.initProductsDependingId();
  }

  initProductsDependingId() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.categoryId = params.get('id');
          if (this.categoryId != null) {
            return this.productService.getByCategory(
              this.categoryId,
              this.limit,
              this.offset
            );
          }
          return [];
        })
      )
      .subscribe((fetchProducts) => {
        this.products = [...fetchProducts];
        console.log(this.products);
      });
  }

  loadProductsByCategory() {
    if (this.categoryId) {
      this.productService
        .getByCategory(this.categoryId, this.limit, this.offset)
        .subscribe({
          next: (products) => {
            if (products.length <= 0) {
              this.storeService.logErrorMessage(
                'We cant find that category',
                2000
              );
            }
            this.products = [...this.products, ...products];
          },
        });
    }
  }
}
