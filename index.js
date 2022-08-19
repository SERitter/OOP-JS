// function Shape(color) {
//   this.color = color;
// }

// Shape.prototype.duplicate = function () {
//   console.log('duplicate');
// };

// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype); // connect child to parent
//   Child.prototype.constructor = Child; //reset the constructor
// }

// function Circle(radius, color) {
//   Shape.call(this, color);
//   this.radius = radius;
// }

// Circle.prototype.draw = function () {
//   console.log('draw');
// };

// extend(Circle, Shape);

// function Square(size) {
//   this.size = size;
// }

// extend(Square, Shape);
// // Square.prototype = Object.create(Shape.prototype); // connect square to shape
// // Square.prototype.constructor = Square; //reset the constructor

// const s1 = new Shape();
// const c1 = new Circle(1, 'red');
// const sq = new Square(10);

// // method overwriting

// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Shape() {}

// Shape.prototype.duplicate = function () {
//   console.log('duplicate');
// };

// function Circle() {}

// extend(Circle, Shape);

// Circle.prototype.duplicate = function () {
//   Shape.prototype.duplicate.call(this);
//   console.log('Circle Duplicate.');
// };

// const c1 = new Circle();

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log('Circle Duplicate.');
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log('Duplicate Square');
};

const shapes = [new Circle(), new Square()];

for (let shape of shapes) shape.duplicate();
