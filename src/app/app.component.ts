import { Component } from '@angular/core';
import { IProduct } from "./models/product.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  imgParent: string = "https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/Screenshot from 2022-04-05 22-42-58.png";
  // imgParent: string = "";

  showImage = true;

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
      img: './assets/images/bike.jpg'
    },
    {
      id: 3,
      name: 'Colleción de albumnes',
      price: 34,
      img: './assets/images/album.jpg'
    },
    {
      id: 4,
      name: 'Mis libros',
      price: 23,
      img: './assets/images/books.jpg'
    },
    {
      id: 5,
      name: 'Casa para perro',
      price: 34,
      img: './assets/images/house.jpg'
    },
    {
      id: 6,
      name: 'Gafas',
      price: 3434,
      img: './assets/images/glasses.jpg'
    } 
  ]

  onLoaded(img: string) {
    console.log("Log Padre", img);
  }

  toggleChangeImg() {
    this.showImage = !this.showImage;
  }
}
