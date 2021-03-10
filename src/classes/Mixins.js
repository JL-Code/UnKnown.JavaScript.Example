// function mix(...mixins) {

//   class Mix {
//     constructor() {
//       for (let mixin of mixins) {
//         copyProperties(this, new mixin());// 拷贝实例属性
//       }
//     }
//   }

//   for (let mixin of mixins) {
//     copyProperties(Mix, mixin);// 拷贝静态属性
//     copyProperties(Mix.prototype, mixin.prototype);// 拷贝原型属性
//   }

//   returnMix;
// }

// function copyProperties(target, source) {
//   for (let key of Reflect.ownKeys(source)) {
//     if (key !== 'constructor'
//       && key !== 'prototype'
//       && key !== 'name'
//     ) {
//       let desc = Object.getOwnPropertyDescriptor(source, key);
//       Object.defineProperty(target, key, desc);
//     }
//   }
// }


let calculatorMixin = Base => class extends Base {
  calc() { console.log("calc"); }
};

let randomizerMixin = Base => class extends Base {
  randomize() { console.log("randomize"); }
};

let dateMixin = Base => class extends Base {
  date() { console.log("date"); }
};

// 实现原理：利用了继承链的特点，套娃式继承。 A=>B=>C=>D......
class Foo { }
class Bar extends calculatorMixin(randomizerMixin(dateMixin(Foo))) { }

let bar = new Bar();
let foo = new Foo();


bar.calc();
bar.randomize();
bar.date();


