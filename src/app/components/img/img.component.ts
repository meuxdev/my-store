import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = "Initial Value";

  @Input("name") firstName: string = "";

  @Input("hello") set alertHello(firstName: string) {
    alert(`Hello ${firstName}`);
  }

  @Output() loaded = new EventEmitter<string>();

  readonly imgDefault: string = "./assets/images/bike.jpg"

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log("Loaded Successfully.");
    this.loaded.emit(this.img);
  }

}
