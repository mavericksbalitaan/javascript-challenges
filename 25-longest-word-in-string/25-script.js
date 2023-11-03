// Create a function that accepts a sentence and returns the longest word in the sentence.

function longestWordInString(sentence) {
  let arr = sentence.split(" ");
  let max = 0;
  let longestWord = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      longestWord = arr[i];
    }
  }
  return longestWord;
}

console.log(longestWordInString("Hello World I am a Web Developer"));
