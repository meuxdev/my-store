import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: IProduct[] = [];
  private totalPrice: number = 0;

  constructor() {}

  addCart(product: IProduct) {
    this.myShoppingCart.push(product);
    // this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    this.totalPrice += product.price;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  getShoppingCart() : IProduct[] {
    return this.myShoppingCart;
  }
}
