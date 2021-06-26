function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("Duplicate");
};

const shapeBase = Object.create(Shape.prototype);

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype = shapeBase;
Circle.prototype.constructor = Circle;

function Square(length) {
  this.length = length;
}

Square.prototype = shapeBase;

const s = new Shape();
const c = new Circle(5, "dodgerblue");
const m = new Square(3);
