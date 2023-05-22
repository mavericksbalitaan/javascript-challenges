// Write a function that accepts two arrays and merges them into a single array.

function merge(arr1, arr2) {
  // Solution 01
  // for (let i = 0; i < arr2.length; i++) {
  //   arr1.push(arr2[i]);
  // }
  // return arr1;


  // Solution 02
  let myArr = [];
  for (let i = 0; i < arr1.length; i++) {
    myArr.push(arr1[i])
  }
  for (let i = 0; i < arr2.length; i++) {
    myArr.push(arr2[i])
  }
  return myArr;
}

console.log(merge([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
