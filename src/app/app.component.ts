import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store';
  // all attributes should be public
  // All default attributes are public
  name: string = 'Alejandro Andrade';
  age: number = 24;
  imgUrl = 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg';
  btnIsDisable = true;
  nameInput = 'input random name';

  person = {
    name: 'Alejandro',
    age: 24,
    avatar: 'https://source.unsplash.com/random',
  };
}
