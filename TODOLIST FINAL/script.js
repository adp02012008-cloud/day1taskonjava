let tasks = [];

// Add Task Function
function addTask() {
  const taskName = document.getElementById("taskInput").value.trim();

  const promise = new Promise((resolve, reject) => {
    if (!taskName) {
      reject("Task name cannot be empty!");
    }
    else if (!isNaN(taskName)) {
      reject("Task name cannot be a number!");
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        name: taskName,
        completed: false,
        createdAt: new Date().toLocaleString()
        
      };
      tasks.push(newTask);
      resolve("Task added successfully!");
    }
  });

  promise
    .then(msg => {
      alert(msg);
      document.getElementById("taskInput").value = "";
      viewTasks();
    })
    .catch(err => alert(err));
}

// View Tasks Function
function viewTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = "<li>No tasks found!</li>";
    return;
  }

  taskList.innerHTML = ''; // clear existing tasks

for (let task of tasks) {
  const li = document.createElement("li");

  li.innerHTML = `
    <div> 
      <div class="${task.completed ? 'completed' : ''}">${task.name}</div>
      <div class="date">${task.createdAt}</div>
    </div>
    <div class="btn-group">
      <button class="done">✅</button>
      <button class="delete">🗑️</button>
    </div>
  `;

  // Add button actions
  li.querySelector('.done').onclick = () => markCompleted(task.id);
  li.querySelector('.delete').onclick = () => deleteTask(task.id);

  taskList.appendChild(li);
}
}

// Delete Task Function
function deleteTask(id) {
  try {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) throw new Error("Task not found!");
    tasks.splice(index, 1);
    viewTasks();
  } catch (error) {
    alert(error.message);
  }
}

// Mark as Completed Function
function markCompleted(id) {
  try {
    const task = tasks.find(task => task.id === id);
    if (!task) throw new Error("Task not found!");
    task.completed = true;
    viewTasks();
  } catch (error) {
    alert(error.message);
  }
}


// Add button event
document.getElementById("addBtn").addEventListener("click", addTask);
//add button html add task function in js