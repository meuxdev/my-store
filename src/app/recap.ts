const username: string = 'meuxdev';

const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const alex = new Person(24, 'Andrade');
alex.age; // -> private atributes
