function getRandomInt(max) {
  var max = Math.max(0, max);
  var min = Math.min(0, max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
var randomNumber = getRandomInt(100);
console.log("Random number between 0 and 100:", randomNumber);
