# Notes

- A web pages consists of three main tecnologies: html, css and js.
- Statements should end with a semicolon;
- Js is case-sensitive

## Conditionals

- Logical Operator ||

```txt
 A	     B	  A || B
false	false	 false
false	true	 true
true	false  true
true	true	 true
```

- Logical Operator &&

```txt
true && true;      // true
1 > 2 && 2 > 1;    // false
true && false;     // false
4 === 4 && 3 > 1;  // true
```

- Logical Operator ! Not

- Comparison Operators

Comparison operators are used to comparing two values and return true or false depending on the validity of the comparison:

=== strict equal
!== strict not equal
> greater than
>= greater than or equal
< less than
<= less than or equal

- Ternary Operator : 

```txt
condición ? valorSiTrue : valorSiFalse
```

- Falsy and truly

false
0
-0
0n
""
null
undefined
NaN



## Statement : 
- Un statement es una orden o una acción completa.
¿Este código realiza una acción? - ➡️ Es un statement.
¿Este código produce un valor? - ➡️ Es una expresión.

En JavaScript, prácticamente todo el programa está formado por statements que contienen expresiones.

const food = 'salad';

switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪');
    break;
  case 'pizza':
    console.log('A delicious pie 🍕');
    break;
  default:
    console.log('Enjoy your meal');
}

// Prints: Enjoy your meal
Note: If break is omitted from the block of a case, the switch statement will continue to check against case values until a break is encountered or the flow is broken

## Break and continue
break = salir, cortar
continue = saltar - paso de ti.
 - break y continue son instrucciones que modifican el comportamiento de un bucle (for, while, )
