import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@models/product.model';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ProductsService } from '@services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.initProduct();
  }

  initProduct() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');
          if (id) {
            return this.productService.getProduct(id);
          }
          return [null];
        })
      )
      .subscribe((product) => product && (this.product = product));
  }

  goToBack() {
    this.location.back();
  }
}
