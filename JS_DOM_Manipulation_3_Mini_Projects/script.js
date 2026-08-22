
function changeText() {
  console.log('Hello text');
  document.getElementById("main-heading").textContent = "DOM Manipulation is awesome";
}

const text = document.getElementById("main-heading").innerText;
console.log(text);

const paragraphs = document.getElementsByClassName("description");

console.log(paragraphs[0].innerText);
console.log(paragraphs[1].innerText);
console.log(paragraphs[2].innerText);

const button = document.getElementsByTagName("button");
console.log(button[0]);

button[0].addEventListener('click', (event) => {
  console.log('hola');
})  

const paragraphs2 = document.querySelector(".description");

const paragraphs3 = document.querySelectorAll(".description");

console.log('query selector', paragraphs2);
console.log('query selectorAll', paragraphs3);

paragraphs3.forEach((paragraph) => {
  console.log(paragraph.innerText);
  console.log(paragraph.textContent);
})

/* Add paragraph */
let count = 0;

document.getElementById("btn-add-p").addEventListener('click', (event) => {
  //console.log(event.target);
  count++;
  const newParagraph = document.createElement("p");
  newParagraph.innerText = `New Paragraph inner html ${count}`;
  document.querySelector('.container').appendChild(newParagraph);
});

/* Adding and removing classes*/

const heading2 = document.querySelector('#main-heading');

heading2.classList.add("highlight", "foo", "bar");

//Cuantas clases tiene un elemento
console.log(heading2.classList);
console.log(heading2.classList.length);

//heading2.classList.remove("foo");

const buttonRemoveClass = document.querySelector('#btn-remove-class');

/* Importante: classList es una DOMTokenList, no un Array normal, aunque se comporta de manera parecida en varias operaciones.*/

buttonRemoveClass.addEventListener('click', () => {
  heading2.classList.remove("foo");
  /* Ya no tiene la clase foo*/
  console.log(heading2.classList.contains("foo"));
  /* Replace */
  console.log(heading2.classList.replace("foo", "bar"));
});



const myAnchor = document.querySelector('a');

console.log(myAnchor);

/* Get Attribute */

console.log(myAnchor.getAttribute('href'));

myAnchor.setAttribute('href', 'https://www.freecodecamp.org');
myAnchor.setAttribute('target', '_blank');
myAnchor.textContent = "VISIT wesite";