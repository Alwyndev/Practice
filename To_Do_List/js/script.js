// document.getElementById('add-task-button').addEventListener('click', function() {
//     const taskInput = document.getElementById('task-input');
//     const taskText = taskInput.value;
//     if (taskText === '') return;

//     const taskList = document.getElementById('task-list');
//     const newTask = document.createElement('li');
//     newTask.className = 'task-item';
//     newTask.innerHTML = `${taskText} <button class="delete-task">Delete</button>`;
    
//     newTask.querySelector('.delete-task').addEventListener('click', function() {
//         taskList.removeChild(newTask);
//     });

//     taskList.appendChild(newTask);
//     taskInput.value = '';
// });
