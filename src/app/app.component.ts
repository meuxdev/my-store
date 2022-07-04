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

  ComponentData = {
    progressBarVal: 43,
    progressBarId: 'ProgressUniqueId',
    buttonText: 'Random Button',
    buttonIsDisabled: true,
    labelTitle: 'Progress Bar:',
  };

  // shoppingList: string[] | number[] = ['Tomatoes', 'Carrots', 'Cereal', 'Meat'];
  // shoppingList: any = ['Tomatoes', 'Carrots', 'Cereal', 'Meat'];
  shoppingList: string[] = ['Tomatoes', 'Carrots', 'Cereal', 'Meat'];
  newProduct = "";



  // en el componente no puede ser privado si va a ser
  // usando en app.html
  toggleButton() {
    this.btnIsDisable = !this.btnIsDisable;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addProductToList(){
    this.shoppingList.push(this.newProduct);
    this.newProduct = "";
  }

  deleteProduct(index: number) {
    this.shoppingList.splice(index, 1);
  }
}
