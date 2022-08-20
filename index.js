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
//   console.log('Circle Duplicate.');
// };

// function Square() {}

// extend(Square, Shape);

// Square.prototype.duplicate = function () {
//   console.log('Duplicate Square');
// };

// const shapes = [new Circle(), new Square()];

// for (let shape of shapes) shape.duplicate();

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log('eating');
  },
};

const canWalk = {
  walk: function () {
    console.log('walking');
  },
};

const canSwim = {
  swim: function () {
    console.log('swim');
  },
};

function Person() {}
mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function Goldfish() {}

mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);
