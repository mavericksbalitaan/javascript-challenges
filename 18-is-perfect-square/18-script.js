// Create a function that accepts a number and checks if it is a perfect square.

function isPerfectSquare(num) {
  // Solution 01
  // if (num === (Math.sqrt(num) * Math.sqrt(num))) {
  //   return true;
  // } else {
  //   return false;
  // }

  // Solution 02
  if (num === (Math.pow(Math.sqrt(num), 2))) {
    return true;
  } else {
    return false;
  }

  // Solution 03
  // let sqrt = Math.sqrt(num);
  // if (num % sqrt === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(12)); // false
