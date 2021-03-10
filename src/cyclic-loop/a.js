exports.done = false;
var b = require("./b.js");
console.log("a.js b.done = %j", b.done); // false
exports.done = true;
console.log("a.js 执行完毕");
