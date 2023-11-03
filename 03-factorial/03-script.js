// Create a function that calculates and returns the factorial of a given number.

function factorial(num) {
  if (num < 0) {
    return undefined;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(-4)); // undefined
console.log(factorial(4)); // 24
// 4 * 3 * 2 * 1 == 24
console.log(factorial(5)); // 120
