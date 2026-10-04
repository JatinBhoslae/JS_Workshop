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

//? Template string

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

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)
// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: push(): Method that adds one or more elements to the end of an array.
// console.log(fruits.push("guava"));
// console.log(fruits);
// The push() method returns the new length.
//? 2: pop(): Method that removes the last element from an array.
// console.log(fruits.pop());
// console.log(fruits);
//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// console.log(fruits.unshift("guava"));
// console.log(fruits);
//? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift());
// console.log(fruits);

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? slicing usually means taking a portion of an array or string without changing the original.

//? Syntax of slice()
// array.slice(start, end)

// const arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(2));       // [30, 40, 50].  --> start from 2 and end till array ends

// const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// const result = fruits.slice(1, 4);
// console.log(result);     // ["Banana", "Mango", "Orange"].  --> start from 1 and to 4

//? Negative Index
// const arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(-2));      // [40, 50]

// const arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(-3, -1));      // [30, 40].  --> end is exclude

//? .slice() also works on strings.

// const name = "Jatin";
// console.log(name.slice(0, 3));       // Jat

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//? splice() modifies the original array.
//? Removing elements with splice()

// const arr = [10, 20, 30, 40, 50];
// const removed = arr.splice(1, 2);
// console.log(removed);    // [20, 30]
// console.log(arr);        // [10, 40, 50]

//? Adding elements using splice()

// const arr = [10, 20, 40, 50];
// arr.splice(2, 0, 30);
// console.log(arr);       // [ 10, 20, 30, 40, 50 ]

// const arr = [10, 20, 30, 40];
// arr.splice(1, 2, 100, 200);
// console.log(arr);           // [10, 100, 200, 40]

// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(1, 1, "grapes");
// console.log(fruits);        // [ 'apple', 'grapes', 'banana', 'mango' ]

// const arr = [10, 20, 30, 40, 50];
// arr.splice(2);
// console.log(arr);       // [10, 20]  --> Start at index 2 and remove everything from there to the end.

//? Negative index with splice()

// const arr = [10, 20, 30, 40, 50];
// arr.splice(-2, 2);
// console.log(arr);       // [ 10, 20, 30 ]

//! what if you want to add the element at the end
// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(-1, 0, "grapes");                  // [ 'apple', 'orange', 'banana', 'grapes', 'mango' ]
// fruits.splice(fruits.length, 0, "grapes");       // [ 'apple', 'orange', 'banana', 'mango', 'grapes' ]
// console.log(fruits);

//* SLICe → Select a portion
//* SPLICe → Surgery on the original array 😄

//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numbers.indexOf(4, 5));

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.indexOf(6);
// console.log(result);
// const result1 = numbers.lastIndexOf(6);
// console.log(result1);
// const result = numbers.indexOf(6, 5);
// console.log(result);

//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

// const result = numbers.find((curElem) => {
//   return curElem > 6;
// });

// console.log(result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.map((curElem) => curElem * 5);
// console.log(result);
// const result2 = result.findIndex((curElem) => {
//   return curElem > 15;
// });
// console.log(result2);

//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.filter((curElem) => {
//   return curElem > 4;
// });

// console.log(result);

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// let updatedCart = numbers.filter((curElem) => {
//   return curElem !== value;
// });

// console.log(updatedCart);

// Practice time
// !Example 2: Filtering Products by Price
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];
// // Filter products with a price less than or equal to 500

// const filterProducts = products.filter((curElem) => {
//   //   console.log(curElem.price <= 500);
//   return curElem.price <= 500;
// });
// console.log(filterProducts);

// //! Filter unique values
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let uniqueValues = numbers.filter((curElem, index, arr) => {
//   //   console.log(index);
//   //   console.log(arr.indexOf(curElem));
//   return arr.indexOf(curElem) === index;
// });
// console.log(uniqueValues);
// console.log([...new Set(numbers)]);

//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

//! Using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];

// let result = numbers.map((curElem) => curElem * curElem);
// console.log(result);            // [ 1, 4, 9, 16, 25 ]

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string. having first letter is capital and rest is small.
// Original array of strings
// const words = ["APPLE", "banana", "cherry", "date"];
// const result = words.map((curElem) => {
//   return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLocaleLowerCase();
// });
// console.log(result);        // [ 'Apple', 'Banana', 'Cherry', 'Date' ]

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((curEle) => {
//   if (curEle % 2 == 0) {
//     return curEle * curEle;
//   }
// })
//     .filter((curEle) =>
//         curEle != undefined
//     );
// console.log(result);        // [ 4, 16 ]

// const evenSquare = numbers
//   .map((curNum) => (curNum % 2 === 0 ? curNum * curNum : undefined))
//   .filter((curElem) => curElem !== undefined);

// console.log(evenSquare);

//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".

// const names = ["ram", "vinod", "laxman"];

// const prefixName = names.map((curEle) => {
//     return `Mr. ${curEle}`
// })

// console.log(prefixName);        // [ 'Mr. ram', 'Mr. vinod', 'Mr. laxman' ]

//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value.
// It iterates over the elements of an array and applies a callback function to each element,
// updating an accumulator value with the result.
// The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.

// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

// const productPrice = [100, 200, 300, 400, 500];

// const totalPrice = productPrice.reduce((accum, curElem) => {
//   return accum + curElem;
// }, 0);

// console.log(totalPrice);        // 1500
