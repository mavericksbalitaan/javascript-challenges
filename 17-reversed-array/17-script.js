// Write a function that takes an array of strings and returns a new array with the strings in reverse order. 

function reversedArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split("").reverse().join(""));
  }
  return newArr;
}

console.log(reversedArr(['hello', 'cat'])); // ['olleh', 'tac']
