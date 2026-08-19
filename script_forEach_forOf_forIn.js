/* 
  ForEach - For OF - For in
  ¿Qué quiero recorrer? ¿Los valores, los índices o las propiedades?
  ForEach - dame cada elemento
  For Of - dame cada valor
  For In - dame cada propiedad
*/

/*  
  Recorre cada elemento de un arreglo.

*/

const names = ['ana', 'pedro', 'carlos', 'luis']

names.forEach((name, index) => {
  console.log(`index: ${index} - name: ${name}`);
})

/* 
  for...of Recorre los valores de un objeto iterable.
  «Dame cada elemento de esta colección».
*/

const fruits = ["Apple", "Orange", "Banana"];

for (const fruit of fruits) {
  console.log(fruit);
}

const greeting = 'Hola mundo';

for (const word of greeting) {
  console.log(word)
}

const word = "Hello";

for (const letter of word) {
  console.log(letter);
}


/* For In: props and index */

const person = {
  name: 'Pedro',
  age: 20,
  isNice: true
}

for (const key in person) {
  console.log(`Props: ${key}`);
  console.log(`Value: ${person[key]}`);
}

const fruits2 = ['orange', 'banana', 'strawberry', 'cherries'];

for (const index in fruits2) {
  console.log(`${index} - Value: ${fruits2[index]}`)
}
