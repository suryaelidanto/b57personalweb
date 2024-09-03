class Dog {
  color = "";
  eyeColor = "";
  height = 0;
  length = 0;
  weigth = 0;

  constructor(color, eyeColor, height, length, weigth) {
    this.color = color;
    this.eyeColor = eyeColor;
    this.height = height;
    this.length = length;
    this.weigth = weigth;
  }

  sit() {
    console.log(`Dog with color ${this.color}, is running!`);
  }

  layDown() {
    console.log(`Dog with height ${this.height}, is laying down!`);
  }

  shake() {
    console.log(`Dog with length ${this.length}, is shaking!`);
  }

  come() {
    console.log(`Dog with weight ${this.weigth}, is coming!`);
  }
}

const bobby = new Dog("Red", "Black", 17, 35, 50); // instance / object
bobby.come();
