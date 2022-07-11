import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product : IProduct = {
    id: 0,
    name: 'Default Product',
    img: './DefaultPath',
    price: 0,
  }

  constructor() { }

  ngOnInit(): void {
  }

}


