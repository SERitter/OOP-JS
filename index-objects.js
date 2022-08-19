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

// //Object Factory
// function createCircle(radius) {
//   return {
//     //ES6 has a feature, where if the key and the value are the same you only need to add it once
//     //radius: radius,
//     radius,
//     draw: function () {
//       console.log('draw');
//     },
//   };
// }

// // const circle = createCircle(1);
// // circle.draw();

// //Object Constructor
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }

// // const another = new Circle(1);
// // another.draw();

// // //Functions are Objects
// // const Circle1 = new Function(
// //   'radius',
// //   `
// //     this.radius = radius;
// //     this.draw = function () {
// //       console.log('draw');
// //     }
// //   `
// // );

// // const circle1 = new Circle1(1);
// // circle1.draw();

// const another = new Circle(1);
// another.draw();
// const another2 = Circle.call({}, 1);
// Circle.call({}, 1);
// // another2.draw();
// const another3 = Circle.apply({}, [1]);
// // another3.draw();

// independent values
// let x = 10;
// let y = x;

// x = 20;

// //References behave differently
// let x = { value: 10 };
// let y = x;

// x.value = 20;

// //Value vs Reference
// let number = 10;
// let obj = { value: 10 };

// function increase(number) {
//   number++;
// }
// function increaseObj(obj) {
//   obj.value++;
// }

// increase(number);
// increaseObj(obj);

// console.log(number);
// console.log(obj);

// //Adding or removing properties
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }

// const circle = new Circle(10);

// circle.location = { x: 1 };
// circle['location'] = { x: 1 };

// for (let key in circle) {
//   if (typeof circle[key] !== 'function') console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle) console.log('Circle has a radius.');

// //public methods and properties
// function Circle(radius) {
//   this.radius = radius;
//   this.defaultLocation = { x: 0, y: 0 };
//   this.computeOptimumLocation = function () {
//     //...
//   };
//   this.draw = function () {
//     this.computeOptimumLocation();
//     console.log('draw');
//   };
// }

// //privatized methods and properties
// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = { x: 0, y: 0 };
//   let computeOptimumLocation = function () {
//     //...
//   };
//   this.draw = function () {
//     computeOptimumLocation();
//     console.log('draw');
//   };
// }

// const circle = new Circle(10);

// // getters and setters
// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = { x: 0, y: 0 };
//   this.getDefaultLocation = function () {
//     return defaultLocation;
//   };
//   this.draw = function () {
//     console.log('draw');
//   };

//   Object.defineProperty(this, 'defaultLocation', {
//     get: function () {
//       return defaultLocation;
//     },
//     set: function (value) {
//       if (!value.x || !value.y) throw new Error('Invalid location.');
//       defaultLocation = value;
//     },
//   });
// }

// const circle = new Circle(10);
// circle.getDefaultLocation();
// circle.defaultLocation;
// circle.defaultLocation = { x: 7, y: 42 };
// circle.draw();

// const sw = new Stopwatch();

// sw.duration;
// sw.reset();
// sw.start(); // catch multiple starts, only allow one start is stopped
// sw.stop(); // catch multiple stops, only stop if started

function Stopwatch() {
  let duration = 0;
  let start = 0;
  let end = 0;

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
  });

  this.reset = function () {
    duration = 0;
  };

  this.start = function () {
    if (start === 0) {
      start = performance.now();
      end = 0;
    } else throw new Error('Stopwatch has already started.');
  };

  this.stop = function () {
    if (end === 0 && start !== 0) {
      end = performance.now();
      let time = (end - start) / 1000;
      // let seconds = Math.round(time);
      duration += time;
      start = 0;
    } else throw new Error('Stopwatch is not started.');
  };
}

const sw = new Stopwatch();

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;
  this.start = function () {
    if (running) throw new Error('Stopwatch has already started.');
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) throw new Error('Stopwatch is not started.');
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
  });
}
