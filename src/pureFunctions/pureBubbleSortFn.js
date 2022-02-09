let integerArray = [12, 65, 21, 4, 65, 35, 78, 1, 33, 64];

const bubbleSortIntegerArray = (array) => {
  const result = [...array];
  let lengthUntilSort = result.length - 1,
    temp,
    sorted = false;

  while (!sorted) {
    sorted = true;
    for (let index = 0; index < lengthUntilSort; index++) {
      if (result[index] > result[index + 1]) {
        sorted = false;
        temp = result[index + 1];
        result[index + 1] = result[index];
        result[index] = temp;
      }
      lengthUntilSort -= 1;
    }
  }

  return result;
};

console.log(bubbleSortIntegerArray(integerArray));
