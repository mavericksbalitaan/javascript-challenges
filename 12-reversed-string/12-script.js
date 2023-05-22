// Create a function that accepts a string and returns the reversed version of that string.

function reversedString(str) {
  return str.split("").reverse().join("");
}

console.log(reversedString("hello")); // olleh
