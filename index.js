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

function Circle(radius) {
  //instance members
  this.radius = radius;
  this.move = function () {
    console.log(this.toString());
    console.log('move');
  };
}

// prototype member
Circle.prototype.draw = function () {
  this.move();
  console.log('draw');
};

const c1 = new Circle(1);
const c2 = new Circle(1);

// prototype member
Circle.prototype.toString = function () {
  return 'Circle with Radius ' + this.radius;
};
