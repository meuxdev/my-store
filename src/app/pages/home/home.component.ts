import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@models/product.model';
import { ProductsService } from '@services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];
  limit = 10;
  offset = 0;
  productId: string | null = null;

  constructor(
    private productsService: ProductsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.queryParamMap.subscribe((query) => {
      this.productId = query.get('product');
      console.log(this.productId);
    });
    this.loadProducts();
  }

  loadProducts() {
    this.productsService
      .getAllProducts(this.limit, this.offset)
      .subscribe((data) => {
        this.products = [...this.products, ...data];
      });

    this.offset += this.limit;
  }
}
