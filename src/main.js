import Cat from './es6-class/Cat.js';
import MachineCat from './es6-class/MachineCat.js';

const tudou = new Cat("土豆");
const machineTudou = new MachineCat("机器土豆");

tudou.eat("皇家猫粮");
Cat.call();

console.log("tudou.Id", tudou.Id)

machineTudou.eat("电池");

machineTudou.say("你好")
