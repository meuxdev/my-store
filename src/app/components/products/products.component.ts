import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [
    {
      id: 1,
      name: 'EL mejor juguete',
      price: 565,
      img: './assets/images/toy.jpg',
    },
    {
      id: 2,
      name: 'Bicicleta casi nueva',
      price: 356,
      img: './assets/images/bike.jpg',
    },
    {
      id: 3,
      name: 'Colleción de albumnes',
      price: 34,
      img: './assets/images/album.jpg',
    },
    {
      id: 4,
      name: 'Mis libros',
      price: 23,
      img: './assets/images/books.jpg',
    },
    {
      id: 5,
      name: 'Casa para perro',
      price: 34,
      img: './assets/images/house.jpg',
    },
    {
      id: 6,
      name: 'Gafas',
      price: 3434,
      img: './assets/images/glasses.jpg',
    },
  ];

  total!: number;

  myShoppingCart: IProduct[] = [];

  constructor() {
    this.total = 0;
  }

  ngOnInit(): void {}

  onAddToCart(product: IProduct) {
    this.myShoppingCart.push(product);
    // this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    this.total += product.price;
  }
}
