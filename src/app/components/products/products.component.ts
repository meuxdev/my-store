import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { StoreService } from '../../services/store.service';

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

  shoppingCart!: IProduct[];

  constructor(private storeService: StoreService) {
    this.shoppingCart = storeService.getShoppingCart();
  }

  ngOnInit(): void {}

  eventAddToCart(product: IProduct) {
    this.storeService.addCart(product);
  }

  getTotalPrice(): number {
    return  this.storeService.getTotalPrice();
  }

  getTotalItems() : number {
    return this.storeService.getShoppingCart().length;
  }
}
