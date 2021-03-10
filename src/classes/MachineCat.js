import Cat from './Cat.js'

export default class MachineCat extends Cat {

  constructor(name) {
    super(name);
    this.type = "智慧型机器猫"
  }

  say(info) {
    console.log(`${this.name}说：${info}`)
  }

  eat(fooName) {
    console.log(`${this.name},开始充电...`);
  }
}