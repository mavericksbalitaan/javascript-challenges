// Create a function that accepts a string and checks if it is a palindrome.

function palindrome(str) {
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("racecar")); // true
