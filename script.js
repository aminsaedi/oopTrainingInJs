const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    _move.set(this, () => console.log("move"));
  }

  draw() {
    console.log(`drawing a circle with radius : ${_radius.get(this)}`);
    _move.get(this)();
  }
}

const c = new Circle(5);

console.log(c);
