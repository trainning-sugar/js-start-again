/*
🎲 Power & Random — 

GOAL:
Practice:
- Math.pow()
- Math.sqrt()
- Math.random()

RULES:
- Observe how random numbers change on refresh
*/

/* STEP 1 — Exponentiation */
// Use Math.pow(2, 4)
// console.log the result
// ✅ WRITE YOUR CODE UNDER THIS LINE
const exponentiation = Math.pow(2,4);
console.log(exponentiation);

/* STEP 2 — Square root */
// Use Math.sqrt(81)
// console.log the result
// ✅ WRITE YOUR CODE UNDER THIS LINE
const root = Math.sqrt(81);
console.log(root);
console.log(Number.isInteger(root), 'is perfect root square');

/* STEP 3 — Random number (0–1) */
// Generate a random number
// console.log it
// ✅ WRITE YOUR CODE UNDER THIS LINE
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + 1;
}

console.log('Random form 1 to 5')
console.log(getRandomNumber(1, 5));
console.log(getRandomNumber(1, 5));
console.log(getRandomNumber(1, 5));
console.log(getRandomNumber(1, 5));


/* STEP 4 — Random whole number (1–10) */
// Generate a random integer between 1 and 10
// Hint: Math.floor(Math.random() * 10) + 1
// console.log it
// ✅ WRITE YOUR CODE UNDER THIS LINE

console.log('Random form 1 to 10')
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(1, 10));