const person = {
  name : 'lulu',
  age: 20,
  sign: 'piscis',
  city: 'New York',
  country: 'USA'
}

person.isActive = true;

console.log(person);

delete person.city

console.log(person);

for ( const key in person ) {
  console.log(` prop -> ${key} : value -> ${person[key]}  `)
}