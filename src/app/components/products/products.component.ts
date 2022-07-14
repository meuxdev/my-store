import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

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

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.shoppingCart = storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data =>  {
      this.products = data;
    })
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
}
