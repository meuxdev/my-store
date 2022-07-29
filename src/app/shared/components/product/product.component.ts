import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '@models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: IProduct = {
    id: 0,
    title: 'Default Product',
    images: ['./DefaultPath', './DefaultPath', './DefaultPath'],
    price: 0,
    category: {
      id: '111',
      name: 'Random category',
    },
    description: 'This is a random description',
  };

  @Output() addedProduct = new EventEmitter<IProduct>();
  @Input()
  set productId(id: string | null) {
    if (id) {
      // Mostrar los detalles
    }
  }

  constructor() {}

  addToCart() {
    this.addedProduct.emit(this.product);
  }
}
