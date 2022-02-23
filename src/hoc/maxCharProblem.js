//Find the character with the maximum number of occurance in a string.

const compose = (a, b) => (data) => a(b(data));

const stringToObj = (str) => {
  let obj = {};
  for (let char of str) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }
  return obj;
};

const getMax = (obj) => {
  let max = 0;
  let result;

  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      result = key;
    }
  }

  return result;
};

const test = "Hello World"

const getMaxChar = compose(getMax, stringToObj)

console.log(getMaxChar(test))