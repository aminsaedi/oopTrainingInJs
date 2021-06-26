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

function Square() {}
extend(Square, Shape);

Square.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);
  console.log("square duplicate");
};

const sq = new Square();
