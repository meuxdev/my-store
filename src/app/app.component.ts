import { Component } from '@angular/core';
import { Product } from "./product.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  imgParent: string = "https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/Screenshot from 2022-04-05 22-42-58.png";
  // imgParent: string = "";

  onLoaded(img: string){
    console.log("Log Padre", img);
  }
}
