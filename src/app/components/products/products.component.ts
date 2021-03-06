import { Component, OnInit } from '@angular/core';
import {
  IProduct,
  ICreateProductDto,
  IUpdateProductDto,
} from '../../models/product.model';

import { switchMap } from 'rxjs/operators'; // .then operator from promises
import { zip } from 'rxjs'; // .then operator from promises
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import { TStatusDetails } from 'src/app/types/statusDetail';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  shoppingCart!: IProduct[];
  today = new Date();
  otherDate = new Date(2021, 1, 23);
  showProductDetail = false;
  activeProduct: IProduct | null = null;
  limit = 10;
  offset = 0;
  status!: TStatusDetails;
  msgError!: string;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.shoppingCart = storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.storeService.activeProduct$.subscribe((d) => {
      this.activeProduct = d;
    });

    this.storeService.appStatus$.subscribe((status) => {
      this.status = status;
    });

    this.storeService.errorMsg$.subscribe((msg) => {
      this.msgError = msg;
    });
    // this.loadMore();
    this.loadProducts();
  }

  eventAddToCart(product: IProduct) {
    this.storeService.addCart(product);
  }

  getTotalPrice(): number {
    return this.storeService.getTotalPrice();
  }

  getTotalItems(): number {
    return this.storeService.getShoppingCart().length;
  }

  closeProductDetail() {
    this.storeService.nullifyDescriptionProduct();
  }

  createNewProduct() {
    const product: ICreateProductDto = {
      title: 'New product',
      description: 'Description product',
      images: ['', '', ''],
      categoryId: '1',
      price: 1000,
    };
    this.productsService.create(product).subscribe((data) => {
      this.products.unshift(data); // adds to first position
    });
  }

  updateProduct() {
    const changes: IUpdateProductDto = {
      title: 'New updated title',
    };

    if (this.activeProduct) {
      const { id } = this.activeProduct;
      this.productsService.update(id.toString(), changes).subscribe((data) => {
        const productIndex = this.products.findIndex(
          (item) => item.id === data.id
        );
        this.products[productIndex] = data;
        this.activeProduct = data;
        // console.log('Updated!!', data);
      });
    }
  }

  deleteProduct() {
    if (this.activeProduct) {
      const { id } = this.activeProduct;
      this.productsService.delete(id.toString()).subscribe((data) => {
        const productIndex = this.products.findIndex((item) => item.id === id);
        this.products.splice(productIndex, 1);
        this.activeProduct = null;
      });
    }
  }

  loadProducts() {
    this.productsService
      .getAllProducts(this.limit, this.offset)
      .subscribe((data) => {
        this.products = [...this.products, ...data];
      });

    this.offset += this.limit;
  }

  provingMultiplesSubscribes(id: string) {
    this.productsService.fetchThenUpdateThenCreate(id).subscribe((data) => {
      console.log(data);
    });

    this.productsService
      .fetchAndUpdate(id, { title: 'new' })
      .subscribe((responses) => {
        const productGet = responses[0];
        const productUpdated = responses[1];
      });
  }
}
