//? Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

//todo When a function declaration is hoisted, its entire definition (including the body) is moved to the top of its containing scope during the creation phase. This means that you can call the function before it's actually declared in the code, and it will still work as expected.

// var myVar = 10;
// function greet () {
//   console.log("Welcome, If you are reading this, Don't forget you are awesome");
// };

// console.log(myVar);     // 10
// greet();                // Welcome, If you are reading this, Don't forget you are awesome


// console.log(myVar);         // undefined
// greet();                    // Welcome, If you are reading this, Don't forget you are awesome

// var myVar = 10;
// function greet() {
//   console.log("Welcome, If you are reading this, Don't forget you are awesome");
// }

// var is hoisted, means it delcare the varibale before excuation of code 


// console.log(myVar);         // ReferenceError 
// greet(); 

// let myVar = 10;
// function greet() {
//   console.log("Welcome, If you are reading this, Don't forget you are awesome");
// }
 
// let and const is also hoisted but it enter into Tempral Dead Zone (TDZ)
// till varibale is assign with value


// greet();        // TypeError: greet is not a function

// var greet = () => {
//     console.log(
//       "Welcome, If you are reading this, Don't forget you are awesome",
//     );
// }
// Only the variable declaration is hoisted
// The function assignment happens later:


// greet();        // ReferenceError: Cannot access 'greet' before initialization

// let greet = () => {
//     console.log(
//       "Welcome, If you are reading this, Don't forget you are awesome",
//     );
// }

// let and const gives ReferenceError
// because, greet is in TDZ
