function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}
extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("circle duplicate");
};

function Square() {}
extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("square duplicate");
};

const shapes = [new Square(), new Circle()];

for (const shape of shapes) {
  shape.duplicate();
}
