//logical operators(AND = &&, or = ||, not = !)

// expression1 && expression2 && expression3
// expression1 || expression2 || expression3
//
const isAdult = true;
const hasLicense = true;

if (isAdult && hasLicense) {
  console.log("You can drive a car.");
} else {
  console.log("You can't drive a car.");
}

const itsRaining = true;
const haveUmbrella = false;

if (itsRaining || haveUmbrella) {
  console.log("You won't get wet.");
} else {
  console.log("You might get wet.");
}

const yearsOfExperience = 5;
const hasDegree = true;
const knowsProgramming = true;
const hasCertification = false;

if (
  (yearsOfExperience >= 3 && hasDegree && knowsProgramming) ||
  (hasCertification && knowsProgramming)
) {
  console.log("You are qualified.");
} else {
  console.log("Sorry!");
}

let weather = "Sunny";

switch (weather) {
  case "sunny":
    console.log("It's a beautiful day.");
    break;

  case "rainy":
    console.log("Grab your umbrella.");
    break;

  case "snowing":
    console.log("Wear a coat, and take a shovel");
    break;

  default:
    console.log("stay home.");
    break;
}
// ternary operators

// functions
function printName(str) {
  console.log(str);
}

printName("Gewist");

//  crating a function
//  function id(parameters){
//    arguments
//  }

function valueSub(a, b) {
  let diff = b - a;
  console.log(diff);
}

valueSub(1, 10);
valueSub(10, 4);

// arrow function
const subValue = (a, b) => b - a;

console.log(subValue(1, 10));

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(fullName("Carlo", "Dacuyan"));
console.log(fullName("Jose", "Rizal"));
console.log(fullName("Juan", "Pablo"));

// excercise 1
function add7(number) {
  return number + 7;
}

console.log(add7(10));

// exercise2
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(7, 3));

// exercise3
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(capitalize("jeJemon"));

// exercise4
function lastLetter(lastChar) {
  return lastChar.charAt(lastChar.length - 1);
}

console.log(lastLetter("abcd"));
