class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  move() {
    super.move();
    console.log("circle move");
  }
}

const c = new Circle("red", 5);

console.log(c);
