// Write a function that accepts a string and capitalizes the first letter of each word.

function titleCase(arr) {
  // Solution 01
  // let newStr = str[0].toUpperCase() + str.slice(1);
  // return newStr;

  // Solution 02
  let words = arr.split(" ");
  let sentence = "";

  for (let i = 0; i < words.length; i++) {
    sentence += words[i][0].toUpperCase() + words[i].slice(1) + " ";
  }
  return sentence;
}

console.log(titleCase("hello world i am a web developer")); // Hello
