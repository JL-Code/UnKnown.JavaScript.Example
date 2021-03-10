exports.done = false;
var a = require("./a.js");
console.log("b.js a.done = %j", a.done); // false
exports.done = true;
console.log("b.js 执行完毕");
