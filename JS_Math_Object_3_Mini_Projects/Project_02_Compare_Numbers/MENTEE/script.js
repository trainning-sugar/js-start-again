/*
📊 Compare Numbers — 

GOAL:
Practice:
- Math.max()
- Math.min()
- Math.abs()

RULES:
- Use console.log() for every result
*/

/* STEP 1 — Create numbers */
// Create 3 numbers (one should be negative)
// console.log them
// ✅ WRITE YOUR CODE UNDER THIS LINE

const negativeNumbers = [-1, -2, -3];

/* STEP 2 — Math.max() */
// Find the largest number
// console.log it
// ✅ WRITE YOUR CODE UNDER THIS LINE
const maxNumber = Math.max(...negativeNumbers);;
console.log(maxNumber);


/* STEP 3 — Math.min() */
// Find the smallest number
// console.log it
// ✅ WRITE YOUR CODE UNDER THIS LINE

const minNumer = Math.min(...negativeNumbers);
console.log(minNumer);


/* STEP 4 — Math.abs() */
// Use Math.abs() on the negative number
// console.log the result
// ✅ WRITE YOUR CODE UNDER THIS LINE

const abs = Math.abs(negativeNumbers[0]);
console.log(abs);