// Write a function that checks if a given year is a leap year.
// Your function should return a boolean value.

function isLeapYear(year) {
  if (year % 400 === 0 && year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(1991)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1700)); // false
