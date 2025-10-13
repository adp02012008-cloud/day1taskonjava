let tasks = [];

function addTask() {
  const taskName = document.getElementById("taskInput").value.trim();
  
  if (!taskName) return alert("Task cannot be empty!");
  if (!isNaN(taskName)) return alert("Task cannot be a number!");

  const newTask = {
    id: Math.floor(Math.random() * 1000),
    name: taskName,
    completed: false,
    createdAt: new Date().toLocaleString()
  };

  tasks.push(newTask);
  document.getElementById("taskInput").value = "";
  viewTasks();
}

function viewTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = "<li>No tasks found!</li>";
    return;
  }

  const template = document.getElementById("taskTemplate").content;

  tasks.forEach(task => {
    const clone = template.cloneNode(true);
    clone.querySelector(".taskName").textContent = task.name;
    clone.querySelector(".date").textContent = task.createdAt;
    if (task.completed) clone.querySelector(".taskName").classList.add("completed");

    clone.querySelector(".done").onclick = () => {
      task.completed = true;
      viewTasks();
    };
    
    clone.querySelector(".delete").onclick = () => {
      tasks = tasks.filter(t => t.id !== task.id);
      viewTasks();
    };

    taskList.appendChild(clone);
  });
}
