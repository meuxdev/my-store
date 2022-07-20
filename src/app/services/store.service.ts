import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { TStatusDetails } from '../types/statusDetail';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: IProduct[] = [];

  // Store
  private myCart = new BehaviorSubject<IProduct[]>([]);
  // Observable ends with $
  myCart$ = this.myCart.asObservable();

  private activeProduct = new BehaviorSubject<IProduct | null>(null);
  activeProduct$ = this.activeProduct.asObservable();

  private appStatus = new BehaviorSubject<TStatusDetails>(TStatusDetails.Init);
  appStatus$ = this.appStatus.asObservable();

  private errorMsg = new BehaviorSubject<string>('');
  errorMsg$ = this.errorMsg.asObservable();

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

  getShoppingCart(): IProduct[] {
    return this.myShoppingCart;
  }

  setDescriptionProduct(productActive: IProduct) {
    this.activeProduct.next(productActive);
  }

  nullifyDescriptionProduct() {
    this.activeProduct.next(null);
  }

  updateAppStatus(newStatus: TStatusDetails) {
    this.appStatus.next(newStatus);
  }

  logErrorMessage(msg: string, ms: number) {
    this.errorMsg.next(msg);
    this.resetErrorMessage(ms);
  }

  private resetErrorMessage(ms: number) {
    setTimeout(() => {
      this.errorMsg.next('');
      this.appStatus.next(TStatusDetails.Init);
    }, ms)}
}
