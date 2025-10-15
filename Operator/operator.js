//* ===================================
//* OPERATORS Section
//* ====================================

//* Types of Operators in JS
// Assignment operators
// Arithmetic operators
// String operators
// Comparison operators
// Logical operators
// Unary operator
// Conditional (ternary) operator

//* ===================================
//* 1: Assignment operators
//* ====================================
// Assignment operators in programming are symbols used to assign values to variables. They take the value on the right side of the operator and assign it to the variable on the left side.

// examples
// var myFavNum = 12;
// Assigns the value 12 to the variable myFavNum
// consoel.log(myFavNum)

//* ===================================
//* 2: Arithmetic operators
//* ====================================

// Arithmetic operators in programming perform basic mathematical operations on variables or values. They include addition, subtraction, multiplication, division, and modulus.

// Addition (+): Adds two values or variables.
// Example:
// var x = 5;
// var y = 10;
// var sum = x + y;
// console.log(sum);

// Subtraction (-): Subtracts the right operand from the left operand.
// Example:
// var a = 10;
// var b = 7;
// var difference = a - b;
// console.log(difference);

// Multiplication (*): Multiplies two values or variables.
// Example:
// var p = 4;
// var q = 6;
// var product = p * q;
// console.log(product);

// Division (/): Divides the left operand by the right operand.
// Example:
// var m = 15;
// var n = 3;
// var quotient = m / n;
// console.log(quotient);

// Modulus (%): Returns the remainder when the left operand is divided by the right operand.
// Example:
// var c = 17;
// var d = 5;
// var remainder = c % d;
// console.log(remainder);

// Special case
// var result = "hello" / 2;
// console.log(result);

//* ===================================
//* 3: String Operators
//* ====================================

// There are a few ways to concatenate strings in JavaScript. The most common way is to use the + operator. For example, to concatenate the strings "Hello" and "World", you would use the following code:

// var str1 = "Hello";
// var str2 = "World ";
// var str3 = str1 + Str2;
// console.log(str3);

// special case
// var a = "5";
// var b = 3;
// var sum = a + b;
// var sum = parseInt(a) + b;
// console.log(sum);

//* ===================================
//* 4: comparison operators
//* ====================================

// Comparison operators in JavaScript are used to compare values and return a Boolean result (true or false).

// Equal (==): Checks if two values are equal.
// console.log(5 == "5");

// Strict Equal (===):
// Checks if two values are equal with aslo check their datatype.
// console.log(5 === "5");

// Not Equal (!=   👉 ! =):
// Checks if two values are not equal.
// console.log(5 != 5);

// Greater Than (>):
// Checks if the value on the left is greater than the value on the right.
// console.log(5 > 2);

// Less Than (<):
// Checks if the value on the left is less than the value on the right.
// console.log(5 < 10);

// Greater Than or Equal To (>=):
// Checks if the value on the left is greater than or equal to the value on the right.
// console.log(10 >= 10);

// Less Than or Equal To (<=):
// Checks if the value on the left is less than or equal to the value on the right.
// console.log(5 <= 10);

//* ===================================
//* 5: Logical operators in JavaScript
//* ====================================

//* There are three main logical operators: && (logical AND), || (logical OR), and ! (logical NOT).

// Logical AND (&&): Returns true if both operands are true, otherwise, it returns false.
// Example:
// var x = 5;
// var y = 10;
// console.log(x > 0 && y < 0);

// Logical OR (||): Returns true if at least one of the operands is true, otherwise, it returns false.
// Example:
// var a = 15;
// var b = 0;
// console.log(a > 10 || b > 10);

// Logical NOT (!):
//? Returns true if the operand is false, and false if the operand is true.
// Example:
// var isOpen = false;
// console.log(!isOpen);

//* ===================================
//* 6: Unary operator
//* ====================================

//? Prefix Increment (++x) and Prefix Decrement (--x): In prefix form, the value of the operand is first incremented or decremented, and then the result is returned.
// var x = 5;
// var y = --x;
// console.log(y);
// console.log(x);

//? Postfix Increment (x++) and Postfix Decrement (x--): In postfix form, the value of the operand is first returned, and then it is incremented or decremented.
// var x = 5;
// var y = x++;
// console.log(y);
// console.log(x);

//* ===================================
//* 7: Conditional (ternary) operator
//* ====================================

//? syntax: condition ? expressionIfTrue : expressionIfFalse;

// ! write a program to check if the candidates isEligibleForDrive or not? Age must be equal to or greater then 18.

// var age = 19;
// var result = age >= 18 ? "Yes" : "No";
// console.log(result);