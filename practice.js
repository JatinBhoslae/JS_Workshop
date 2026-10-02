// function test() {
//   var x = 10;
// }

// console.log(x);

// if (true) {
//   var x = 10;
// }

// console.log(x);

// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     let c = 30;

//   console.log(a);
//   console.log(b);
//     console.log(c);
//   }

//   inner();
// }

// outer();
// console.log(a);
// console.log(b);
// let x;
// console.log(x);

//  x = 10;

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// console.log(i);

// const user = {
//   name: "Jatin",
// };

// user.name = "Rahul";
// console.log(user)

// let name = "Jatin"
// let name = "Rahul"
// console.log(name)

// const name = "Jatin";
//  name = "Rahul";
// console.log(name);

// console.log("A");

// function test() {
//   console.log(x); // ❌ Error
//   console.log("B");
// }

// test();

// console.log("C");

// function greet() {
//   console.log("Hello");
// }

// function execute(fn) {
//   fn();
// }

// execute(greet);

// execute(greet)
//       ↓
// greet is passed to fn
//       ↓
// fn = greet
//       ↓
// fn()
//       ↓
// greet()
//       ↓
// console.log("Hello")
//       ↓
// Hello

// function outer() {

//     function inner() {
//         console.log("Hello");
//     }

//     return inner;
// }

// let x = outer();

// x();

// let x = outer();
//        ↓
//    outer() runs
//        ↓
//    inner function is created
//        ↓
//    return inner
//        ↓
//    x now refers to inner
//        ↓
// x()
//        ↓
// inner()
//        ↓
// console.log("Hello")
//        ↓
// Hello

// obj = {
//   name: "Jatin",
//   Name: "Jatin",
// };
// console.log(obj);

// const person = {
//   name: "Jatin",
//   greet: () => {
//     console.log(this.name);
//   },
// };

// person.greet();         // undefined

// const person = {
//   name: "Jatin",
//   greet() {
//     console.log(this.name);
//   },
// };

// const fn = person.greet;
// fn();                       // undefined