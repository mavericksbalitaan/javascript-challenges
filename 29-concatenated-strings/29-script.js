// Create a function that accepts an array of strings and returns the concatenation of all the strings.

function concatenatedStr(arr) {
  let sentence = "";
  for (let i = 0; i < arr.length; i++) {
    sentence += arr[i] + " ";
  }
  return sentence;
}

console.log(concatenatedStr(["hello", "world", "i", "am", "a", "web", "developer"])); // hello world i a web developer
