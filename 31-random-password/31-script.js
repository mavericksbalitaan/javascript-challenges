// Create a function that generates a random password with at least 10 characters.

function randomPassword() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let password = "";
  for (let i = 0; i < 10; i++) {
    password += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return password;
}

console.log(randomPassword());
