
/* SET TIMEOUT */

console.log('start');

setTimeout(function() {
  console.log('Hello, after 2 seconds');
}, 2000);

console.log('end');

/* SET INTERVAL */

const intervalId = setInterval(function(){
  console.log('hola');
}, 2000);


/* CLEAR INTERVAL */
setTimeout(() => {
  console.log('interval id');
  clearInterval(intervalId);
}, 10000);


/* Haciendo un contador automatico */

function generateRandomNumber () {
  return Math.floor(Math.random() * 5) + 1;
}

console.log(generateRandomNumber());
console.log(generateRandomNumber());
console.log(generateRandomNumber());
console.log(generateRandomNumber());
console.log(generateRandomNumber());

/* Haciendolo con setInterval*/

let count = 0;

const intervalId2  = setInterval(() => {
  count++;
  console.log(count);

  if(count === 5) {
    clearInterval(intervalId2);
  }
}, 1000);


function fetchData() {
  return new Promise((resolve, reject) => {

    /* Aqui vamos con el exito del programa */
    setTimeout(() => {
      let success = Math.random() > 0.5;
      success ? resolve('fetched data') : reject('error fetching data');
    }, 1000)

  })
}


fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err))


/* Async Away */
async function fetchData2() {
try {
  const data  = await new Promise((resolve, reject) => {
    
  setTimeout(() => {  
    resolve('Data succesfully loaded fetchData2');
    }, 2000);

  })

  console.log(data);

  } catch (error) {
    reject('error', error)
  }
}

fetchData2();
console.log('End of script');

/* Fetch data */

async function getData () {

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const user = await response.json();
    console.log("user -", user);
  } catch (err) {
    console.log("Error fetching user");
  }
}

getData();


