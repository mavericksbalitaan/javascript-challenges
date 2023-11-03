// Create a function that accepts an array of numbers and returns the median value.

function median(arr) {
  let sort = arr.sort((a, b) => a - b);
  let middle = 0;
  let first = 0;
  let second = 0;

  if (arr.length % 2 !== 0) {
    middle = Math.floor(arr.length / 2);
    return sort[middle];
  } else {
    first = sort[arr.length / 2 - 1];
    second = sort[arr.length / 2];
    middle = (first + second) / 2;
    return middle;
  }
}

console.log(median([2, 5, 8, 11, 16, 21, 30])); // 11
console.log(median([3, 5, 8, 10, 24, 36, 79, 255])); // 17
console.log(median([5, 7, 9, 10, 11])); // 9
