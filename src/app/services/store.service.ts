import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: IProduct[] = [];

  // Store
  private myCart = new BehaviorSubject<IProduct[]>([]);
  // Observable ends with $
  myCart$ = this.myCart.asObservable();

  private totalPrice: number = 0;

  constructor() {}

  addCart(product: IProduct) {
    this.myShoppingCart.push(product);
    // Adding the cart
    this.myCart.next(this.myShoppingCart);
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
