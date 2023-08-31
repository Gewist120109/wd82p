let grade = prompt("What is your grade?");

if (grade < 75) {
  console.log("Failed! Try again next quarter.");
} else if (grade <= 80) {
  console.log("Pass! Exert more effort.");
} else if (grade <= 85) {
  console.log("Good! Keep it up.");
} else if (grade <= 90) {
  console.log("Very good! A job well done.");
} else {
  console.log("Excellent!");
}
