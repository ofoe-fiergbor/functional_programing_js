# Pure Functions

Pure functions are conceptually similar to mathematical functions. For any given input, a pure function must return exactly one possible value.

To be considered pure, functions must fulfil the criteria of haveing no side effects.

## What is a side effect ?
A side-effect is any operation your function performs that is not related to computing the final output. 
This include but not limited to :
<ul>
    <li>Printing to a screen or console</li>
    <li>Modifying a global variable</li>
    <li>Mutating data</li>
    <li>Making HTTP requests</li>
    <li>DOM manipulation</li>
    <li>Reading/writing files</li>
</ul>

Pure function example:<br>
```
const addTwoNumbers = (num1: number, num2: number) => num1 + num2;
```

Impure function examples:<br>

```
let oldDigit = 5;

function addNumber(newValue: number) {
  return oldDigit += newValue;
}

function printName() {
  console.log("My name is Ofoe Fiergbor.");
}
```

## Why pure functions?
<ul>
    <li>Pure functions are easy to test, given how predictable they are.</li>
    <li>Pure functions are easier to read.</li>
    <li>Pure functions always return the same output for the same input, we can cache/memoize the results of pure function calls.</li>
</ul>