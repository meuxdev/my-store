import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: IProduct = {
    id: 0,
    title: 'Default Product',
    image: './DefaultPath',
    price: 0,
    category: 'Random category',
    description: 'This is a random description',
  };

  @Output() addedProduct = new EventEmitter<IProduct>();

  constructor() {}

  addToCart() {
    this.addedProduct.emit(this.product);
  }
}
