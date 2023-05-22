// Create a function that accepts two strings and checks if they are anagrams. Your function should return a boolean value.
// (fyi: an anagram contains the same characters but in a different order).
// For example: "cat" and "act" are anagrams

function anagram(str1, str2) {
  if (str1.length === str2.length) {
    if (str1.split("").sort().join() === str2.split("").sort().join()) {
      return true;
    }
  } else {
    return false;
  }
}

console.log(anagram("cat", "act")); // true
console.log(anagram("secure", "rescue")); // true
console.log(anagram("cat", "as")); // false
