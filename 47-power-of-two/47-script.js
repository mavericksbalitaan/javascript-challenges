// Create a function that accepts a number and checks if it is a power of two.

const powerTwo = (num) => {
  for (let i = 0; i < 64; i++) {
    if (Math.pow(2, i) == num) {
      return true;
    }
  }
  return false;
};

console.log(powerTwo(8)); // true
console.log(powerTwo(24)); // false
console.log(powerTwo(32)); // true
