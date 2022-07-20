import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {
  IProduct,
  ICreateProductDto,
  IUpdateProductDto,
} from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private baseURL: string = `${environment.API_URL}/api/products`;

  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();

    if (limit !== undefined && offset !== undefined) {
      console.log('pasando');
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }

    return this.http
      .get<IProduct[]>(`${this.baseURL}`, { params })
      .pipe(retry(3));
  }

  getProduct(id: string) {
    return this.http.get<IProduct>(`${this.baseURL}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError(() => new Error('Ups! internal error'));
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError(() => new Error('The product does not exists'));
        }
        if( error.status === HttpStatusCode.Unauthorized) {
          return throwError(() => new Error('Ups! Logging please.'));
          
        }

        return throwError(() => new Error('Ups something Went wrong'));
      })
    );
  }

  create(dto: ICreateProductDto) {
    return this.http.post<IProduct>(this.baseURL, dto);
  }

  update(id: string, dto: IUpdateProductDto) {
    //PUT needs to send all the information of the model
    // Even if the change is just in one attribute

    // PATCH needs just the specific field to update,
    // just updates a partial part of the objs
    return this.http.put<IProduct>(`${this.baseURL}/${id}`, dto);
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.baseURL}/${id}`);
  }

  getByPage(limit: number, offset: number) {
    return this.http.get<IProduct[]>(this.baseURL, {
      params: { limit, offset },
    });
  }
}
