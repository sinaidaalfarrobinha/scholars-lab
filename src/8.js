function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateCode(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(getRandomInt(characters.length));
  }
  return result;
}
