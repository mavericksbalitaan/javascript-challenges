// Create a function that accepts an array of numbers and checks if the number 21 is included in the array.
// I.e. if given the array [55, 56, 5521, 22, 100] your function should return false.
// If given the array [33, 32, 34, 35, 100, 21, 18, 99, 100] your function should return true.

function has21(arr) {
  // Solution 01
  // if (arr.includes(21)) {
  //   return true;
  // } else {
  //   return false;
  // }

  // Solution 02
  return arr.includes(21) ? true : false;
}

console.log(has21([55, 56, 5521, 22, 100])); // false
console.log(has21([33, 32, 34, 35, 100, 21, 18, 99, 100])); // true
