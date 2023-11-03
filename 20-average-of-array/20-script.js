// Create a function that accepts an array of numbers and returns the average of all the numbers.

function averageOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(averageOfArray([1, 2, 3])); // 2
console.log(averageOfArray([5, 10, 15])); // 10
