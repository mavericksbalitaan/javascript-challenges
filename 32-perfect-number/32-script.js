// Write a function that accepts a number and checks if it is a perfect number.

function perfectNumber(num) {
  let divisors = [];
  let sum = 0;

  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  for (let i = 0; i < divisors.length; i++) {
    sum += divisors[i];
  }

  if (sum === num) {
    return true;
  } else {
    return false;
  }
}

console.log(perfectNumber(5)); // false
console.log(perfectNumber(6)); // [1, 2, 3] perfect number
