// Write a function that takes an array of strings and capitalizes the first letter of each word.
// Input is an array and output is an array

function titleCase(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  return newArr;
}

console.log(titleCase(["hello", "world", "i", "am", "a", "web", "developer"])); // [ 'Hello', 'World', 'I', 'Am', 'A', 'Web', 'Developer' ]

