const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

function getRandomId () {
  return Math.floor(Math.random() * 100) + 1;
}


function addTask() {
 const taskText = taskInput.value.trim();

 if (taskText === "") return;
  
 const taskItem = document.createElement("li");
 const deleteItemButton = document.createElement("button");
  
  taskItem.textContent = taskText;
  deleteItemButton.textContent = 'x'

  deleteItemButton.setAttribute('id', `delete-item-${getRandomId()}`);

  taskItem.append(deleteItemButton);
  taskList.append(taskItem);

  taskInput.value = "";

  //To delete a item
  deleteItemButton.addEventListener('click', (event) => {
    console.log(event.target);
    taskList.removeChild(taskItem);
  })

}

