// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }

// const circle = new Circle(10);

// let person = { name: 'Shawn' };
// // console.log(person);

// // for (let key in person) console.log(key);
// // console.log(Object.keys(person));

// // let objectBase = Object.getPrototypeOf(person);
// // let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// // console.log(descriptor);

// Object.defineProperty(person, 'name', {
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });

// // person.name = 'John';

// // console.log(person);
// // console.log(Object.keys(person));

// delete person.name;
// console.log(person);

//Prototype vs instance members
// function Circle(radius) {
//   //instance members
//   this.radius = radius;
//   this.move = function () {
//     console.log(this.toString());
//     console.log('move');
//   };
// }

// // prototype member
// Circle.prototype.draw = function () {
//   this.move();
//   console.log('draw');
// };

// const c1 = new Circle(1);
// const c2 = new Circle(1);

// // prototype member
// Circle.prototype.toString = function () {
//   return 'Circle with Radius ' + this.radius;
// };

// // Iterating Instance and Prototype members
// function Circle(radius) {
//   //instance members
//   this.radius = radius;

//   this.move = function () {
//     console.log('move');
//   };
// }

// // Prototype members
// Circle.prototype.draw = function () {
//   console.log('draw');
// };

// const c1 = new Circle(1);

// //returns instance members
// console.log(Object.keys(c1));

// //returns instance and prototype members
// for (let key in c1) console.log(key);

// //avoid extending the builtin objects
// Array.prototype.shuffle = function () {
//   //...
// };

// const array = [];
// array.shuffle();

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
  Object.defineProperty(this, 'startTime', {
    get: function () {
      return startTime;
    },
    set: function (value) {
      duration = value;
    },
  });
  Object.defineProperty(this, 'endTime', {
    get: function () {
      return endTime;
    },
    set: function (value) {
      duration = value;
    },
  });
  Object.defineProperty(this, 'running', {
    get: function () {
      return running;
    },
    set: function (value) {
      duration = value;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) throw new Error('Stopwatch has already started.');
  this.running = true;
  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error('Stopwatch is not started.');
  this.running = false;
  this.endTime = new Date();
  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
  duration += seconds;
};

Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};

const sw = new Stopwatch();
