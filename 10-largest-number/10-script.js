// Write a function that takes an array of numbers as an argument and returns the largest number in the array.

function largestNumber(arr) {
  // Solution 01
  // let sort = arr.sort((a, b) => a - b);
  // return sort[sort.length - 1];

  // Solution 02
  // let sort = arr.sort((a, b) => b - a);
  // return sort[0];
  

  // Solution 03
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largestNumber([1, 26, 3, 4, 5]));
