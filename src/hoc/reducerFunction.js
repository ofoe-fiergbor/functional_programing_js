const customReduce = (callback, initialValue, array) => {
  let value = initialValue;

  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    value = callback(value, currentValue);
  }

  return value;
};

const sumOfNumbers = customReduce(
  (initialValue, currentValue) => initialValue + currentValue,
  0,
  [1, 2, 3]
);


console.log(sumOfNumbers)