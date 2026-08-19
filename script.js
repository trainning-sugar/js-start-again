console.log('Hello this is js');

let myVar = "Hello World";
console.log(myVar)

const buttonCalculator = document.getElementById('btn-calculator');

buttonCalculator.addEventListener('click', () => {
  
  alert("Ingresa los datos a calcular ...")
  
  /* Enter data */
  let num1 = prompt("Enter the first number");
  let num2 = prompt("Enter the second number");
  
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  const sum = num1 + num2;
  const diff = num1 - num2;
  const product = num1 * num2;
  const quotient = num1 / num2;
  const rest = num1 % num2;

  console.log(`Sum: ${ sum }`)
  console.log(`Diff: ${ diff }`)
  console.log(`Product: ${ product }`)
  console.log(`Quotient: ${ quotient }`)
  console.log(`Rest: ${ rest }`)

})


/* 
  Data Types
  
  Primitives (7)
  String, Number, BigInt, Boolean, Symbol
  Undefined (Automatically assigned to variables that have just been declared but not initialized.), 
  Null(Represents the intentional absence of any object value.)

  Objects: Everything else
  Arrays, Objects, Functions
*/

console.log('Hello world')
console.warn('Warning time')
console.error('This is for error')



