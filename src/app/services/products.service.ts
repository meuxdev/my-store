import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product.model';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient){}

  private baseURL: string = 'https://young-sands-07814.herokuapp.com';

  getAllProducts() {
    return this.http.get<IProduct[]>(`${this.baseURL}/api/products`);
  }

  getProduct(id: string) {
    return this.http.get<IProduct>(`${this.baseURL}/api/products/${id}`);
  }
}
