class Animal {
  brain = true;
  legs = 0;
}

class Human extends Animal {
  legs = 2;
  skinColor = "white";
}

class Pet extends Animal {
  brain = false;
  legs = 4;
  fleas = 0;
}

class Dog extends Pet {
  fleas = 8;

  goof() {
    console.log("miawww");
  }
}

class Cat extends Pet {
  fleas = 4;

  miaw() {
    console.log("miawww");
  }
}

const anto = new Dog();
anto.goof();
