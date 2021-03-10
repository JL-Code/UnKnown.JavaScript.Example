export default class Cat {
  #id;
  constructor(name) {
    this.name = name;
    this.#id = Math.round(Math.random() * 10000);
  }

  get Id() {
    return this.#id;
  }

  eat(fooName) {
    console.log(`${this.name},开始吃：${fooName}`);
  }

  static call() {
    console.log("喵喵...")
  }
}