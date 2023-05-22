// Create a function that accepts a number as an argument and returns all the prime numbers up to that number.
// I.e. if given the number 9, your function should return 2, 3, 5, 7

function primeNumbers(num) {
  let store = [];
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (!store[i]) {
      primes.push(i);
      for (let j = i << 1; j <= num; j += i) {
        store[j] = true;
      }
    }
  }
  return primes;
}

console.log(primeNumbers(5)); // 2, 3, 5
console.log(primeNumbers(9)); // 2, 3, 5, 7
console.log(primeNumbers(11)); // 2, 3, 5, 7
console.log(primeNumbers(13)); // 2, 3, 5, 7, 11, 13
