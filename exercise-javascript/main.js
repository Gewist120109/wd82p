// problem no. 1
function addNumbers(num1, num2) {
  return num1 + num2;
}

// problem no. 2
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

//  problem no. 3
function reverseString(str) {
  let reversedStr = " ";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str.charAt(i);
  }
  return reversedStr;
}

console.log(reverseString("hello"));

//  problem no. 4

function findLargestNumber(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestNumber([5, 1, 3, 22, 100]));

// problem no. 5
function isPalindrome(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return str === reversedStr;
}

console.log(isPalindrome("racecar"));
