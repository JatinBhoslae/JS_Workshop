//* ==========================================
//*    ECMAScript Features (2016):
//* =========================================

//* ==============================
//*    Exponentiation Operator
//* ===============================

//? ES7 introduces a new mathematical operator called exponentiation operator. This operator is similar to using Math.pow() method. Exponentiation operator is represented by a double asterisk **. The operator can be used only with numeric values.

//* syntax
// base_value ** exponent_value;

//? Basic usage:
// let base = 2;
// let exponent = 3;
// console.log("using Math.pow()", Math.pow(base, exponent));
// console.log("using exponentiation operator", base ** exponent);

//? In expressions:
//! calculates the area of a circle with a radius of 5 units.
// let area = Math.PI * 5 ** 2;
// console.log(area.toFixed(2));

//* ==============================
//*  Array.includes()
//* ===============================

//? includes() with array

// const fruits = ["apple", "banana", "mango"];
// console.log(fruits.includes("banana"));     // true
// console.log(fruits.includes("orange"));     // false

// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers.includes(30));    // true

// array.includes(value, startIndex);
// console.log(numbers.includes(30, 3)); // false  --> search start from 3rd index that serch contain only 40,50 elements

//? includes() with strings

// const name = "Kodyfier";
// console.log(name.includes("Kody")); // true
// console.log(name.includes("xyz"));  // false

//! Important: includes() is case-sensitive

// const fruits = ["Apple", "Banana"];
// console.log(fruits.includes("apple"));      // false

//! Important: includes() also check data types

// const numbers = [10, 20, 30];
// console.log(numbers.includes("10"));            // false

//! Special Case --> Nan === Nan

const arr = [1, 2, NaN, 4];
console.log(arr.includes(NaN));                 // true