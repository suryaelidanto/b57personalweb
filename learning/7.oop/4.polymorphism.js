class Animal {
  speak() {
    console.log("Please define a class (Duck/Dog/Cat) to speak!");
  }
}

class Duck extends Animal {
  speak() {
    // overriding / menimpa
    console.log("Quack!");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Whoof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Miaw!");
  }
}

const animal = new Cat();
animal.speak();
