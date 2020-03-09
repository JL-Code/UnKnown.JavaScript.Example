/**
 * @description 验证 commonjs 的循环加载机制
 * @see http://www.ruanyifeng.com/blog/2015/11/circular-dependency.html
 *  1. b.js 中 a.js 只执行部分代码，因为 b.js a.done = false 而不是 true
 *  2. `var b = require("./b.js")` 并没有重新执行 b.js 而是输出缓存的b.js的执行结果。因为并没有输出重复的打印日志。
 * 
 * 
 * CommonJS模块的重要特性是加载时执行，即脚本代码在require的时候，就会全部执行。CommonJS的做法是，一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。
 */
var a = require("./a.js");
var b = require("./b.js");

console.log("main.js a.done = %j b.done = %j", a.done, b.done);
