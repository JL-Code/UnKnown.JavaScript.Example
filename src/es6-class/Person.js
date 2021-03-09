// JS 原型链 ？？？
class Person {

  // 默认构造函数(如果没有显示指定，JS 引擎会自动加上一个空的 constructor 方法)，默认返回实例对象（即 this）
  constructor(name) {
    this.name = name;
  }

  // 属性
  get Name() {
    console.log("getter ...")
    return this.name;
  }
  /**
   * @param {String} value
   */
  set Name(value) {
    console.log("setter ...")
    this.name = value;
  }

  // 类方法，不可枚举（与ES5 行为不一致）
  sayHello() {
    console.log("你好，我是" + this.name)
  }
}

var person = new Person("欣然");

console.log(person.Name)
console.log("person.Name = 蒋欣然")
person.Name = "蒋欣然";
person.sayHello();
// 类的类型是函数
console.log(typeof Person)
// 类本身的引用指向构造函数
console.log(Person === Person.prototype.constructor)
// 类方法，不可枚举（与ES5 行为不一致）
console.log("Object.keys(Person.prototype)", Object.keys(Person.prototype))
console.log("Object.getOwnPropertyNames(Person.prototype)", Object.getOwnPropertyNames(Person.prototype))

// 类中定义的方法都是定义在 prototype 上。类的内部所有定义的方法，都是不可枚举的（non-enumerable）

// 等价的 ES5 语法

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () {
//   console.log("你好，我是" + this.name);
// }

// var person = new Person("欣然");
// person.sayHello();

// 属性表达式(方法名、属性名、字段名都可以使用表达式)
class Person1 {
  constructor(name) {
    this['name'] = name;
  }
  get ['Name']() {
    return this.name;
  }
  ['sayHello']() {
    console.log("sayHello")
  }
}

// 类表达式

const immediately = class inside {
  constructor(description) {
    this.description = description;
  }
  sayHello() {
    console.log(this.description)
    console.log("你好，" + inside.name + " description:" + this.description)
  }
}

new immediately("这是一个 Class 表达式").sayHello();

// 类表达式的应用场景：写出立即执行的类

const immediatelyExecute = new class {
  constructor(description) {
    this.description = description;
  }
  sayHello() {
    console.log("description:" + this.description)
  }
}("立即执行的类").sayHello();
