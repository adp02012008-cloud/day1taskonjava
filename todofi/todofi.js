let tasks = [];
function addTask() {
  const taskName = document.getElementById("taskInput").value;
  const date = document.getElementById("due").value;
  new Promise((resolve, reject) => {
    if (taskName === "") {
      reject("Task name cannot be empty!");
    } else {
      const task = {
        id: Math.floor(Math.random() * 1000),
        name: taskName,
        date: date,
        completed: false,
        createdAt: new Date().toLocaleString()
      };
      tasks.push(task);
      resolve("Task added successfully!");
    }
  })
  .then((msg) => {
    alert(msg);
    document.getElementById("taskInput").value = "";
    document.getElementById("due").value = "";
    viewTasks();
  })
  .catch((err) => {
    alert(err);
  });
}
function viewTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  if (tasks.length === 0) {
    list.innerHTML = "<li>No tasks found!</li>";
    return;
  }
  for (let task of tasks) {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="box"><span class="${task.completed ? 'completed' : ''}">
      ${task.name} <p>Created at:<small>(${task.createdAt})</small></p>
      <p>Due at:<small>(${task.date})</p>
      </span>
      <span>
        <button onclick="markCompleted(${task.id})" id="box"> Done</button>
        <button onclick="deleteTask(${task.id})" id="del"> Delete</button>
      </span></div><br>
    `;
    list.appendChild(li);
    console.log(task.name);
    console.log(task.createdAt);
    console.log(task.id);
  }
}
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
function markCompleted(id) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.completed = true;
    viewTasks();
  }
}