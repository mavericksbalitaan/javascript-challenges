// Write a function that takes a sentence as a parameter and counts the number of words in the sentence.

function wordCount(sentence) {
  return sentence.split(" ").length;
}

console.log(wordCount("Hello World!"));
