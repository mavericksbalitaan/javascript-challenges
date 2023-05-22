// Write a function that checks if a given number is positive, negative, or zero and returns a corresponding message.

function number(num) {
  if (num === 0) {
    return `${num} is zero`;
  } else if (num > 0) {
    return `${num} is positive`;
  } else {
    return `${num} is negative`;
  }
}

console.log(number(0)); // 0 is zero
console.log(number(1)); // 1 is positive
console.log(number(-1)); // -1 is negative
