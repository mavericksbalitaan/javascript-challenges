// Write a function that takes a number as input and returns true if the number is prime, and false otherwise.

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(9)); // false
console.log(isPrime(23)); // true
