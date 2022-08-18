// console.log('Hello World!');

//Object Literals
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log('draw');
//   },
// };

// circle.draw();

//Object Factory
function createCircle(radius) {
  return {
    //ES6 has a feature, where if the key and the value are the same you only need to add it once
    //radius: radius,
    radius,
    draw: function () {
      console.log('draw');
    },
  };
}

const circle = createCircle(1);
circle.draw();

//Object Constructor
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const another = new Circle(1);
another.draw();
