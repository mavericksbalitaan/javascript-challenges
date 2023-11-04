// Create a function that shuffles the elements of an array randomly.

const shuffleElements = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

console.log(shuffleElements(["M", "a", "v", "e", "r", "i", "c", "k", "s"]));
