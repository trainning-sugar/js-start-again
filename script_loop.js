/* Conozco la cantidad de veces */

for ( let i = 0; i < 5; i++ ) {
  console.log(`Iteration ${i}`)
}

for (let i = 10; i >= 0; i--) {
  console.log(`Reverse iteration ${i}`)
}

/* 
  continue - break
*/

for (let i = 0; i < 5; i++ ) {
  if (i === 3) continue;
   console.log(`Continue ${i}`);
}

for (let i = 0; i < 5; i++ ) {
  if (i === 3) break;
   console.log(`Break ${i}`);
}


/* 
  While: mientras ocurra algo
*/

let count = 0;

while (count <= 5) {
  console.log("count while the condition is true= ", count);
  count++;
}

/*  
  Use input untill correct password 
  ¿Cuál es la condición?
  ¿Qué código quiero repetir?
  ¿Qué valor cambiará en cada iteración?
*/



let input = ''
let attemps = 0;

/* primero pregunta y después actúa. ¿Puedo entrar?. 
while (input !== 'yes') {
  input = prompt('ingresa tu password');
  if (attemps === 3) {
    alert('sorry :( no podemos ayudarte');
    break
  }
  attemps++;
}
*/

/* Do while : do...while ➜ primero actúa y después pregunta.*/

let input2 = ''
let attemps2 = 0;

do {
  // código que se ejecutará al menos una vez
   input2 = prompt('ingresa tu password do-while');

   attemps2++;
   
   if (attemps2 === 3) {
    alert('ya no tienes intentos disponibles');
    break;
   }

} while ( input2 !== 'yes')


 let count3 = 0;
 
 while (count3 < 5 ) {
  
  count3++;
  
  if (count3 === 3) {
    continue;
  }
  console.log(` Esto pasa con continue dentro de while ${count3}`);

 }