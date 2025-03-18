// Function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to generate a random string of length n
function getRandomString(n) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < n; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}
