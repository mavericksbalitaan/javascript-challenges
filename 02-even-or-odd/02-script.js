// Write a function that checks if a given number is even or odd.
// If the number is odd return " ${num} is an odd number ".
// If the number is even return " ${num} is an even number ".

function evenOrOdd(num) {
  // Solution 01
  if (num % 2 === 0) {
    return ` ${num} is an even number `;
  } else {
    return ` ${num} is an odd number `;
  }

  // Solution 02
  // if (num % 2 !== 0) {
  //   return ` ${num} is an odd number `;
  // } else {
  //   return ` ${num} is an even number `;
  // }
}

console.log(evenOrOdd(3)); // 3 is an odd number
console.log(evenOrOdd(4)); // 4 is an even number
