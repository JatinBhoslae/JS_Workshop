//* ===============================
//* Conditional statement Section
//* ===============================

//* Types of Conditional statement in JS
// If Else Statement
// Else If Ladder
// Switch Statements

//* ===============================
//* 1. If Else Statement
//* ===============================

//? If Else:  The if...else statement executes a statement if a specified condition is true and if the condition is false, another statement in the optional else clause will be executed.

//? Syntax
// if (condition) {
//   // Code to be executed if the condition is true
// } else {
//   // Code to be executed if the condition is false
// }

//? Let check the temperature
// var temperature = 25;
// if (temperature > 30) {
//   console.log("lets go to beach");
// } else {
//   console.log("tv dekhte hai");
// }

//* ===============================
//* 2. Else IF Ladder
//* ===============================

// var marks = 80;
// if (marks >= 60) {
//   console.log("First Class");
// } else if (marks >= 50) {
//   console.log("Second Class");
// } else {
//   console.log("Fail");
// }

//* ===============================
//* 3. Switch Statment 
//* ===============================

// Switch Statement: The switch statement is used to perform different actions based on different conditions.
//? Syntax:
// switch (expression) {
//   case value1:
//     //   Code to be executed if expression === value1
//     break;

//   case value2:
//     //   Code to be executed if expression === value2
//     break;

//   //  More cases can be added as needed

//   default:
//   //  Code to be executed if none of the cases match
// }

// var day = "Friday";

// switch (day) {
//   case "Monday":
//     console.log("today is monday");
//     break;

//   case "Friday":
//     console.log("today is friday");
//     break;

//   case "Sunday":
//     console.log("today is sunday");
//     break;

//   default:
//     console.log("no condition match");
// }