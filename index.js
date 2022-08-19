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

let number = 10;
let obj = { value: 10 };

function increase(number) {
  number++;
}
function increaseObj(obj) {
  obj.value++;
}

increase(number);
increaseObj(obj);

console.log(number);
console.log(obj);
