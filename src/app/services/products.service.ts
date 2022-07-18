import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct, ICreateProductDto, IUpdateProductDto } from '../models/product.model';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private baseURL: string =
    'https://young-sands-07814.herokuapp.com/api/products';

  getAllProducts() {
    return this.http.get<IProduct[]>(`${this.baseURL}`);
  }

  getProduct(id: string) {
    return this.http.get<IProduct>(`${this.baseURL}/${id}`);
  }

  create(dto: ICreateProductDto) {
    return this.http.post<IProduct>(this.baseURL, dto);
  }

  update(id: string, dto: IUpdateProductDto ) {
    //PUT needs to send all the information of the model
    // Even if the change is just in one attribute

    // PATCH needs just the specific field to update,
    // just updates a partial part of the objs
    return this.http.put<IProduct>(`${this.baseURL}/${id}`, dto);
  }
}
