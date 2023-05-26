// Write a function that accepts two arrays and returns a new array containing only the common elements.

function commonElements(arr1, arr2) {
  let commons = [];

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      commons.push(arr2[i]);
    }
  }
  return commons;
}

console.log(commonElements([1, 2, 3, 4, 5], [3, 4, 5, 6])); // [3, 4, 5]
