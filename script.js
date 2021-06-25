// console.log("Hello world");

// Object literal syntax => {}

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// const circle = createCircle(1);
// circle.draw();

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const anotherCircle = new Circle(1);

anotherCircle.draw();
