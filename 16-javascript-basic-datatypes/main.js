// Javascript Datatypes
// 1. Numbers
/* - Integers (e.g. 10, 400, -5)
   - floating point numbers (e.g. 12.5, 56.3954653985)
   - doubles
   **/

let age = 28;
let tempInCelsius = 38.5;

let myAge = parseInt("28");
let tempInFarenheit = parseFloat("89.7");

console.log(typeof age);
console.log(typeof myAge);

let firstNumber = 10;
let secondNumber = 5;
let thirdNumber = parseInt("5");

console.log(secondNumber + thirdNumber);
console.log(6 + 9); // addition
console.log(20 - 15); // subtraction
console.log(3 * 7); // multiplication
console.log(10 / 5); // division
console.log(5 ** 2); // exponent
console.log(8 % 3); // modulo/remainder
console.log((5 % 9) * 10);

let year = 2023;
// increment
year++;
// decrement
year--;
console.log(year);

// assignment operator(=)
let x = 3;
let y = 4;
x *= y;
console.log(x);

//comparisson
let a = 5;
let b = 5;
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// 2. string
// 3. boolean
