// Create a function that accepts an array of numbers and returns a new array with only the unique values.

function uniqueValues(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    // Solution 01
    // if (newArr.includes(arr[i])) {
    //   null;
    // } else {
    //   newArr.push(arr[i]);
    //   console.log(newArr);
    // }

    // Solution 02
    newArr.includes(arr[i]) ? null : (newArr.push(arr[i]));
  }
  return newArr;
}

console.log(uniqueValues([1, 1, 1, 3, 4, 5])); // [1, 3, 4, 5]
