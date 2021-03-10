export class Person {
  #pid = '';
  // 声明字段
  age = 0;

  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.#pid = Date.now().toString();
  }

  /**
 * 吃东西
 * @param {Object} params 
 */
  eat(params) {
    console.log(`${this.name} 正在吃: ${params}`);
  }

  /**
   * 睡觉
   */
  sleep() {
    console.log(`${this.name}:睡觉中... pid:${this.#pid}`)
  }
}


export class Student extends Person {

  // 声明字段
  classes = "高三二班";
  likes = [];

  // 构造函数
  constructor(name, age, sex, classes = "高三二班", likes = []) {
    // 必须，显示调用父类构造函数
    super(name, age, sex);
    this.setClasses = classes;
    // 实例(原型)属性
    this.likes = likes;
  }

  // getter 方法
  get getClasses() {
    return this.classes;
  }

  // setter 方法
  /**
   * @param {(arg0: string) => void} value
   */
  set setClasses(value) {
    this.classes = value;
  }

  // 原型方法
  study() {
    console.log(`${this.classes} 的 ${this.name} 正在学习`);
  }

  // 生成器方法
  *getLikes() {
    for (const like of this.likes) {
      yield like;
    }
  }

  // 静态方法,工具函数
  static compute(operator, x, y) {
    // 此处的 this 指代的是调用类。
    console.log(this);
    switch (operator) {
      case '+':
        console.log(`${x} + ${y} = ${x + y}`);
        break;
      default:
        console.log("暂时不会...🙅‍♂️")
        break;
    }
  }
}


export class XStudent extends Student {
  constructor() {
    super("jiangy", 0, 1, "高三二班", [])
  }
}
