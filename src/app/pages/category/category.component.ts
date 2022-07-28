import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@models/product.model';
import { ProductsService } from '@services/products.service';
import { StoreService } from '@services/store.service';

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
    // Getting param ID
    this.route.paramMap.subscribe(
      (params) => (this.categoryId = params.get('id'))
    );

    this.loadProductsByCategory();
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
