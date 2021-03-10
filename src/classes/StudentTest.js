import { Person, Student, XStudent } from './Student.js'

(function () {

  let student = new Student("jiangy");
  let person = new Person("人");
  let xs = new XStudent();

  xs.sleep();

  person.sleep();

  console.log(student.name);
  student.eat("🍇");
  student.study();
  student.sleep();
  student.log = function () {
    console.log(...arguments);
  }

  // student.eat = function (){
  //   console.log("覆写 eat 方法")
  // }

  student.eat("🍇");

  console.log(typeof student)
  student.log("你好，student log")

  console.log(student instanceof Person);
  console.log(student instanceof Student);

  // 静态方法
  Student.compute("+", 1, 1)

  let eat = student.eat
  // TypeError Cannot read property 'name' of undefined
  eat("🍚");

})();
