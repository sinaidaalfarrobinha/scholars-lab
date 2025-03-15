// Example 1: Create a simple function that takes a single argument and returns its square root
function getSquareRoot(num) {
  return Math.sqrt(num);
}

// Example 2: Create a function that takes two arguments and returns their sum
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Example 3: Create a function that takes an array as input and returns the average of its elements
function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
