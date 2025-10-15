//* ======================================
//* ARRAYS IN JAVASCRIPT
//* ======================================

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable.

//* It can hold various data types, including numbers, strings, objects, and even other arrays.
//*  Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so on.

//* ======================================
//*  Creating Arrays:
//* =====================================

//? Using Array constructor
// let fruits = new Array('apple', 'orange', 'banana')

//? Using array literal
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits);

//* ======================================
//*  Accessing Elements:
//* =====================================

//? Accessing Elements:  Array elements are accessed using zero-based indices.
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits[2]);
// console.log(fruits[3]);

//* ======================================
//*  Modifying Elements:
//* ======================================

//?  Modifying Elements: You can modify array elements by assigning new values to specific indices.

// let fruits = ["apple", "orange", "banana"];
// fruits[2] = "mango";
// console.log(fruits);

//* ======================================
//*  Array Traversal:
//* ======================================

// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: for of loop
//* for...of Loop: The for...of loop is used to iterate over the values of arrays, strings

// for (let item of fruits) {
//   console.log(item);
// }

// for (let item = 0; item < fruits.length; item++) {
//   console.log(fruits[item]);
// }

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the indices of an array, string.

// for (let item in fruits) {
//   console.log(item);
// }

// Template string

// let firstName = "jatin";
// let LastName = "Bhosale";

// console.log(firstName + LastName);
// console.log(`${firstName} ${LastName}`);

// let age = 20;
// console.log(`I am ${age} years old`);

//? 3: for each method

// fruits.forEach((curElem, index) => {
//   console.log(`${curElem} ${index}`);
// });

//? 4.map function

// const map = fruits.map((curElem, index) => {
//   return `${curElem} ${index}`;
// });
// console.log(map);
