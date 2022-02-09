let integerArray = [12, 65, 21, 4, 65, 35, 78, 1, 33, 64];

const selectionSortIntegerArray = (array) => {
  const result = [...array];
  let temp, lowestNumberIndex;

  for (let index = 0; index < result.length; index++) {
    lowestNumberIndex = index;

    for (let j = 0; j < result.length; j++) {
      if (result[j] < result[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }

    if (lowestNumberIndex != index) {
      temp = result[index];
      result[index] = result[lowestNumberIndex];
      result[lowestNumberIndex] = temp;
    }
    return result;
  }
};

console.log(selectionSortIntegerArray(integerArray));
