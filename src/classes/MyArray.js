class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  // 覆盖父数组构造函数
  // static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1, 2, 3);
var mapped = a.map(x => x * x);

console.log(mapped);

console.log(mapped instanceof MyArray);
// false
console.log(mapped instanceof Array);
// true