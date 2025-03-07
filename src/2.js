function getRandomJSCode() {
  const codes = ['1+2', '3*4', '5^6'];
  return codes[Math.floor(Math.random() * codes.length)];
}

console.log(getRandomJSCode());
