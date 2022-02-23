const compose = (a, b, c) => (data) => a(b(c(data)));

const multiplyBy3 = (num) => num * 3;
const multiplyBy4 = (num) => num * 4;
const multiplyBy5 = (num) => num * 5;


const getNumber = compose(multiplyBy3, multiplyBy4, multiplyBy5)

console.log(getNumber(1))