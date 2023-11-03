// Create a function that accepts a number and generates the Fibonacci sequence up to that number.

const fibonacci = (num) => {
  let myArray = [0, 1];
  let prev = 0;
  let curr = 1;
  let next = 0;

  // while (next < num) {
  //     next = prev + curr;
  //     prev = curr;
  //     curr = next
  //     myArray.push(next);
  // }

  for (let i = 0; next < num; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
    myArray.push(next);
  }
  return myArray;
};

console.log(fibonacci(8));
