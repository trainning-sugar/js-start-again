const input = document.getElementById('textInput');
const displayText = document.getElementById('displayText');

const output = document.getElementById('out');

const inputSelect = document.getElementById('cars');

input.addEventListener('keyup', (event) => {
  displayText.textContent = `You typed ${event.target.value}`;
});

inputSelect.addEventListener('change', (event) => {
  console.log(event.target.value);
  console.log(inputSelect.value);
  output.textContent = inputSelect.value;
});

const btn = document.getElementById("btn");

function handleClick () { 
  console.log("Handle click");
  btn.removeEventListener('click', handleClick);
}

btn.addEventListener('click', handleClick);

  

const arrayColors = [
  {
   color: 'Navy',
   hex: '#000080'
  },
  {
   color: 'Red',
   hex: '#FF0000'
  },
  {
   color: 'Green',
   hex: '#008000'
  },
  {
   color: 'Yellow',
   hex: '#FFFF00'
  },
  {
   color: 'Orange',
   hex: '#FF8B1F'
  },
];

const colorDiv = document.getElementById('color-buttons');

arrayColors.forEach((ele) => {
  const button = document.createElement('button');
   button.textContent = ele.color;
   button.setAttribute('data-color', `${ele.hex}`);
   colorDiv.append(button);
});

colorDiv.addEventListener('click', (event) => {
  
  const colorSelected = event.target.getAttribute('data-color');
  const div = document.querySelector('#pick-color');

  div.classList.add('cajita');
  
  console.log(typeof colorSelected);
  
  div.style.backgroundColor = colorSelected;

});


