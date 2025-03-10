function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomArbitrary(0, 10);
console.log(randomNumber);
