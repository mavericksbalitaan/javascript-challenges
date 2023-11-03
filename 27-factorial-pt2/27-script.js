// Create a function that accepts a number and returns an array of its prime factors.

function primefactors(num) {
  let pfractors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      pfractors.push(i);
    }
  }
  return pfractors;
}

console.log(primefactors(9)); // [1, 3, 9]
console.log(primefactors(12)); // [1, 2, 3, 4, 6, 12]
