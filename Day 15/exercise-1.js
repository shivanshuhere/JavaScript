class Animal {
  name = "";
  age = undefined;
  color = "";
  legs = undefined;
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getInfo() {
    console.log(this.name, this.age, this.color, this.legs);
  }
}

const animal1 = new Animal("Tuffy", 10, "Brown", 4);
console.log(animal1.getInfo());
//1

class Dog extends Animal {
  //   constructor(name, age, color, legs) {

  // }
  getInfo() {
    console.log(this.name, this.age);
  }
}
class Cat extends Animal {
  //   constructor(name, age, color, legs) {
  // }
  getInfo() {
    console.log(this.color, this.legs);
  }
}
const dog1 = new Dog("Kalu", 19, "grey", 4);
const cat1 = new Cat("nani", 9, "black", 2);
console.log(dog1.getInfo());
console.log(cat1.getInfo());
//2
