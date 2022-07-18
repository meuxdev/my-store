import { Component, OnInit } from '@angular/core';
import {
  IProduct,
  ICreateProductDto,
  IUpdateProductDto,
} from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import { isThisSecond, isThursday } from 'date-fns';

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

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.shoppingCart = storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
    this.storeService.activeProduct$.subscribe((d) => {
      this.activeProduct = d;
    });
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

  toggleProductDetail() {
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
        const productIndex = this.products.findIndex(item => item.id === data.id);
        this.products[productIndex] = data; 
        this.activeProduct = data;
        // console.log('Updated!!', data);
      });



    }
  }
}
