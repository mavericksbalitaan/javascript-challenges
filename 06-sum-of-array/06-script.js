// Create a function that accepts an array of numbers and returns the sum of all the numbers in the array.
// I.e. if given [4, 25, 337] your function should return 366

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfArray([1, 2, 3])); // 6
console.log(sumOfArray([4, 25, 337])); // 366
