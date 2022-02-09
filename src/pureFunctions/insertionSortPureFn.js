let integerArray = [12, 65, 21, 4, 65, 35, 78, 1, 33, 64];

const insertSortInteger = (arr) => {
  const arrayClone = [...arr];
  let temp;

  for (let index = 1; index < arrayClone.length; index++) {
    temp = arrayClone[index];
    while (index > 0 && arrayClone[index - 1] > temp) {
      arrayClone[index] = arrayClone[index - 1];
      index -= 1;
    }
    arrayClone[index] = temp;
  }
  return arrayClone;
};

console.log(insertSortInteger(integerArray));
