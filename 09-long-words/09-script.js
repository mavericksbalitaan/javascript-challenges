// Create a function that accepts an array of strings and returns a new array with only the strings that have more than 5 characters.

function longWords(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 5) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}

console.log(longWords(["abcde", "abcd", "abc", "ab", "a"])); // ['abcde']
