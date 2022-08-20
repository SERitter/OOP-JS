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

// function mixin(target, ...sources) {
//   Object.assign(target, ...sources);
// }

// const canEat = {
//   eat: function () {
//     this.hunger--;
//     console.log('eating');
//   },
// };

// const canWalk = {
//   walk: function () {
//     console.log('walking');
//   },
// };

// const canSwim = {
//   swim: function () {
//     console.log('swim');
//   },
// };

// function Person() {}
// mixin(Person.prototype, canEat, canWalk);

// const person = new Person();
// console.log(person);

// function Goldfish() {}

// mixin(Goldfish.prototype, canEat, canSwim);

// const goldfish = new Goldfish();
// console.log(goldfish);

// Exercise Prototypical Inheritance
// Design two objects,
// HtmlElement
// HtmlSelectElement - represents drop down list

// Prototypical inheritance, htmlElement is the parent, HtmlSelectElement is the child

// function HtmlElement() {
//   this.click = function () {
//     console.log('clicked');
//   };
// }

// HtmlElement.prototype.focus = function () {
//   console.log('focused');
// };

// function HtmlSelectElement(items = []) {
//   this.items = items;

//   this.addItem = function (value) {
//     this.items.push(value);
//   };

//   this.removeItem = function (value) {
//     this.items.splice(this.items.indexOf(value), 1);
//   };
// }

// HtmlSelectElement.prototype = new HtmlElement();
// // HtmlSelectElement.constructor = HtmlSelectElement;

// const e = new HtmlElement();
// //should have one method - click()
// //its prototype should have = focus()

// const s = new HtmlSelectElement();
// can be initialized with an array, if no arguments provided initialize with an empty array
// s.addItem
// s.removeItem

// Exervcise 2
// Extend htmlSelectElement with a render method
// s.render should log each item as an option
/*
  <select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
*/

// function HtmlElement() {
//   this.click = function () {
//     console.log('clicked');
//   };
// }

// HtmlElement.prototype.focus = function () {
//   console.log('focused');
// };

// function HtmlSelectElement(items = []) {
//   this.items = items;

//   this.addItem = function (value) {
//     this.items.push(value);
//   };

//   this.removeItem = function (value) {
//     this.items.splice(this.items.indexOf(value), 1);
//   };

//   this.render = function () {
//     let output = '<select>\n';
//     for (item of items) {
//       output += '\t<option>' + item + '</option>\n';
//     }
//     output += '</select>';
//     return output;
//   };
// }

// HtmlSelectElement.prototype = new HtmlElement();

// function HtmlImageElement(src) {
//   this.src = src;
//   this.render = function () {
//     return '<img src="' + src + '" />';
//   };
// }

// HtmlImageElement.prototype = new HtmlElement();

// const e = new HtmlElement();

// const s = new HtmlSelectElement([1, 2, 3]);

// const i1 = new HtmlImageElement('https://');

// const elements = [new HtmlSelectElement([1, 2, 3]), new HtmlImageElement('https://')];

// for (element of elements) console.log(element.render());

// Exercise 2 solution

function HtmlElement() {
  this.click = function () {
    console.log('clicked');
  };
}

HtmlElement.prototype.focus = function () {
  console.log('focused');
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (value) {
    this.items.push(value);
  };

  this.removeItem = function (value) {
    this.items.splice(this.items.indexOf(value), 1);
  };

  this.render = function () {
    // let output = '<select>\n';
    // for (item of items) {
    //   output += '\t<option>' + item + '</option>\n';
    // }
    // output += '</select>';
    // return output;
    return `
    <select>
      ${this.items
        .map(
          (item) => `
        <option>${item}</option>
      `
        )
        .join('')}
    </select>
    `;
  };
}

HtmlSelectElement.prototype = new HtmlElement();

function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const e = new HtmlElement();

const s = new HtmlSelectElement([1, 2, 3]);

const i1 = new HtmlImageElement('https://');

const elements = [new HtmlSelectElement([1, 2, 3]), new HtmlImageElement('https://')];

for (element of elements) console.log(element.render());
