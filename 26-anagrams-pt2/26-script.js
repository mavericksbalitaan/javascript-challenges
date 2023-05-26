// Write a function that accepts two strings and checks if they are anagrams, ignoring spaces and punctuation.

function anagrams(str1, str2) {
  if (str1.length === str2.length) {
    if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
      return true;
    }
  } else {
    return false;
  }
}

console.log(anagrams("cat", "act")); // true
console.log(anagrams("secure", "rescue")); // true
console.log(anagrams("cat", "as")); // false
