// Write a function that takes in two numbers, calculates the factorials of each of pushes all the values to one array

function factorial(num) {
  if (num < 0) {
    return undefined;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function factorialArray(num1, num2) {
  let arr = [];
  arr.push(factorial(num1));
  arr.push(factorial(num2));
  return arr;
}

console.log(factorialArray(4, 5)); // [24, 120]
