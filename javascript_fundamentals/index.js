// class
class Car {
  constructor(name) {
    this.name = name;
  }
  summary() {
    return `the car name is a ${this.name}`;
  }
  static hello() {
    return `Hello World!`;
  }
}
var car = new Car("Toyota");
console.log(car);
console.log(car.summary());
console.log(Car.hello());

//Inheritance
class newCars extends Car {
  constructor(name, price) {
    super(name);
    this.price = price;
  }
  carprice() {
    return `The ${this.name} Car Price is ${this.price}`;
  }
}

var price = new newCars("BMW", 100000);
console.log(price);
console.log(price.carprice());

// getter
class Book {
  constructor(name) {
    this.name = name;
  }
  get summary() {
    return this.getName();
  }
  getName() {
    return `${this.name} Holy Book Of Hindu's`;
  }
}

var myBook = new Book("RAMAYANA");
console.log(myBook.summary);

//static

class Sum {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  static sum(a, b) {
    return a + b;
  }
}
console.log(Sum.sum(100, 100));

// class
function Animal() {}

Animal.prototype.speak = function(name) {
  return (this.name = name);
};

Animal.eat = function(name) {
  return (this.name = name);
};

let obj = new Animal();
let speak = obj.speak;
console.log(speak("Govardhan")); // global object

let eat = Animal.eat;
console.log(eat("Govardhan aaleswara")); // global object

// prototype
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
