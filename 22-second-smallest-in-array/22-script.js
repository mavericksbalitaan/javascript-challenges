// Write a function that finds the second smallest number in an array of numbers.

function secondSmallest(arr) {
  return arr.sort()[1];
}

console.log(secondSmallest([3, 1, 2])); // 2
