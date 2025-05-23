// Initialize global variables
let x = 0;

// Function to increment the value of x
function increment() {
    x++;
}

// Main program loop
while (true) {
    console.log("x: " + x);
    // Increment the value of x every second
    setInterval(increment, 1000);
}
