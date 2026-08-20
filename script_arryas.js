const animals = ['cat', 'dog', 'rabbit', 'pig'];

const copia = [...animals];

console.log(animals);
console.log(copia.push('camell')) //poner al ultimo
console.log(copia.pop()); //sacar el ultimo
console.log(copia.shift()) //saca el primero
console.log(copia.unshift('rabbit')); //Meter algo al principio
console.log(copia.unshift('indian rabbit')); //Meter algo al principio

console.log(copia);


const months = ["Jan", "Mar", "Apr", "May"];

const copy = months.toSpliced(1, 0, 'Lunes');

console.log('original', months);
console.log('copy con toSpliced', copy);

const newCopy = months.toSpliced(1, 1);

console.log('original', months);
console.log(newCopy);

months.splice(0, 0, 'lala');

console.log(months);

months.splice(1, 0, 'lalala');

console.log(months);

months.splice(2, 0, 'lalalala');

console.log(months);

console.log(months.splice(2, 1)); //te retorna el array con el elemento eliminado

/* MAP FILTER */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double = numbers.map(ele => ele * 2);

console.log(double);


const even = numbers.filter(ele => ele % 2 === 0);

const odd = numbers.filter(ele => ele % 2 !== 0);

console.log('pares', even);

console.log('impares', odd);




