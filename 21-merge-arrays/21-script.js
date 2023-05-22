// Write a function that accepts two arrays and merges them into a single array.

function mergeArrays(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
  }
  return arr1;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
