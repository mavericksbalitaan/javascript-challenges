// Write a function that accepts a string and removes all duplicate characters from the string.

function removeDuplicates(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    // Solution 01
    // if (newStr.includes(str[i])) {
    //   null;
    // } else {
    //   newStr += str[i];
    //   console.log(newStr);
    // }

    // Solution 02
    newStr.includes(str[i]) ? null : (newStr += str[i]);
  }

  return newStr;
}

console.log(removeDuplicates("hello")); // helo;
