function getRandomColor() {
  var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Example usage
var color = getRandomColor();
console.log("The random color is: " + color);
