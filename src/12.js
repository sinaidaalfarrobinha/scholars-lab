// Scholars Lab Project - Exploring New Ideas and Developments in Education
// Generated using a random number generator

const generateRandomNumber = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomString = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < generateRandomNumber(); i++) {
    str += alphabet[generateRandomNumber() % alphabet.length];
  }
  return str;
};

const generateRandomObject = () => {
  const keys = ["name", "age", "gender"];
  const values = [generateRandomString(), generateRandomNumber(), generateRandomString()];
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
};

const generateRandomArray = () => {
  const arr = [];
  for (let i = 0; i < generateRandomNumber(); i++) {
    arr.push(generateRandomObject());
  }
  return arr;
};

const generateRandomCode = () => {
  const randomCode = {};
  for (let i = 0; i < generateRandomNumber(); i++) {
    randomCode[`prop${i}`] = generateRandomString();
  }
  return JSON.stringify(randomCode, null, 2);
};

console.log(generateRandomCode());
