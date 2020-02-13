/**
 * @description 验证 commonjs 的循环加载机制
 * @see http://www.ruanyifeng.com/blog/2015/11/circular-dependency.html
 *  1. b.js 中 a.js 只执行部分代码，因为 b.js a.done = false 而不是 true
 *  2. `var b = require("./b.js")` 并没有重新执行 b.js 而是输出缓存的b.js的执行结果。因为并没有输出重复的打印日志。
 */
var a = require("./a.js");
var b = require("./b.js");

console.log("main.js a.done = %j b.done = %j", a.done, b.done);
