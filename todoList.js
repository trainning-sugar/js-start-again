
const tasks = [];

while (true) {
  
  let task = prompt('Put your task or indicate "done" to finish');

  if (task.toLocaleLowerCase() === 'done') {
    break;
  }

  tasks.push(task);
}

console.log('Your todo list');

tasks.forEach((task, index) => {
  console.log(`${index + 1} : ${task}`);
})
