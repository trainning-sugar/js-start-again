/*
⚙️ Function Starter — 
TOPICS:
- Declaring functions
- Calling functions
- return vs console.log
- Function expressions (stored in variables)

RULES:
- Write code under each step.
- Use console.log() to prove it works.
*/

/* -----------------------------------------
   STEP 1 — Declare a function (classic function)
   -----------------------------------------
   1) Create a function named sayHello
   2) Inside it, console.log("Hello!")
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE

function sayHello() {
   console.log('Hello!');
}



/* -----------------------------------------
   STEP 2 — Call the function
   -----------------------------------------
   Call sayHello() 3 times.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
sayHello();
sayHello();
sayHello();

/* -----------------------------------------
   STEP 3 — Return a value
   -----------------------------------------
   1) Create a function named getGreeting
   2) It should return the string "Hi, welcome!"
   3) Store the return value in a variable and console.log it
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
function getGreeting() {
   return "Hi, welcome!";
}

const greeting = getGreeting();

console.log(greeting);



/* -----------------------------------------
   STEP 4 — Function with 1 parameter
   -----------------------------------------
   1) Create a function named greetPerson(name)
   2) It should console.log: "Hello, <name>!"
   3) Call it with 2 different names
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
function greetPerson(name) {
   console.log(`Hello, ${name}`);
}

greetPerson('Lulu');
greetPerson('Juan Carlos');

/* -----------------------------------------
   STEP 5 — Function expression
   -----------------------------------------
   Expression: valor
   Statement: es una instruction

   1) Create a variable called square
   2) Store a function inside it that takes a number n
   3) Return n * n
   4) console.log square(5)
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const square = function (n) {
   return n * n;
}
console.log(square(5));

/* STATEMENT */
function sumar1(a, b) {
  return a + b;
}

/* EXPRESSION */
const sumar2 = function (a, b) {
  return a + b;
};

console.log(sumar2(2,2));

/* ARROW FUNCTION */
const sumar3 = (a,b) => a + b; 

console.log(sumar3(1,1));