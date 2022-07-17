import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set setImg(newImg: string) {
    this.img = newImg;
    // apply code 
    // console.log("Changing Just img", this.img);
  };

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("name") firstName: string = "";

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("hello") set alertHello(firstName: string) {
    alert(`Hello ${firstName}`);
  }

  @Output() loaded = new EventEmitter<string>();

  readonly imgDefault: string = "./assets/images/bike.jpg"

  counter: number = 0;

  counterFuncRef: number | undefined;

  constructor() {
    // DO NOT run async.
    // before render
    // runs once every instance created.
    // console.log(`Creating the constructor...\n imgValue => ${this.img}`);
  }

  // ngOnInit(): void {
  //   // Before rendering
  //   // RUN async functions fetch. Promises. etc. 
  //   // Runs only once
  //   // console.log(`ngOnInit...\n imgValue => ${this.img}`);
  //   // this.counterFuncRef = window.setInterval(() => {
  //   //   this.counter += 1;
  //   //   console.log('run counter');
  //   // }, 1000);
  // }

  // ngAfterViewInit(): void {
  //   // after rendering.
  //   // handler children.
  //   // Components children had already been rendering.
  //   // console.log(`ngAfterViewInit...\n imgValue => ${this.img}`);
  // }

  ngOnChanges(changes: SimpleChanges): void {
    // before render
    // changes on inputs -- multiple times
    // runs every time the input status this will run. 

    // if(changes){
    // code to review each change
    // }
    const { setImg: { currentValue, previousValue } } = changes;
    // console.log("Current Value: ", currentValue);
    // console.log("Prev Value: ", previousValue);

    // console.log(`ngOnChange...\n imgValue => ${this.img}`);
  }

  // ngOnDestroy(): void {
  //   // Clean Events.
  //   // Some events will continue exc. even if the component
  //   // was destroyed.
  //   // Kill all events.
  //   // window.clearInterval(this.counterFuncRef);
  //   // console.log("Destroying the component...");

  // }



  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    // console.log("Loaded Successfully.");
    this.loaded.emit(this.img);
  }

}
