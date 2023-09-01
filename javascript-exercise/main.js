// Excercise 1
let balance = 1000;

let transaction1 = balance + 500;
balance = transaction1;

let transaction2 = balance - 200;
balance = transaction2;

let transaction3 = balance - 1000;
balance = transaction3;
console.log(balance);

// Exercise 2
let testScore1 = 85;
let testScore2 = 75;
let testScore3 = 93;

let averageScore = Math.round((testScore1 + testScore2 + testScore3) / 3);
console.log(averageScore);

// Exercise 3
let temp = prompt();

if (temp > 30) {
  console.log("It's hot outside!");
} else if (temp >= 20) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's a bit chilly.");
}
