// Create a function that accepts a string and counts the number of vowels in the string.

function vowelCount(str) {
  let vowels = /[aeiou]/g;
  return str.match(vowels).length;
}

console.log(vowelCount("aeiobcd")); // 4
