// 🌟 Smart To-Do List Script 🌟

// Global task list
let tasks = [];

// 🧩 Load existing tasks
window.onload = () => {
  const saved = localStorage.getItem("tasks");
  if (saved) tasks = JSON.parse(saved);
  showTasks();
};

// ➕ Add New Task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDue = document.getElementById("taskDue");
  const name = taskInput.value.trim();
  const dueDate = taskDue.value;

  // 🛑 Validation
  if (!name) return alert("Please enter a task name!");
  if (!dueDate) return alert("Please select a due date!");
  if (new Date(dueDate) < new Date()) return alert("Due date cannot be in the past!");

  // 🚫 Prevent duplicate task names
  const duplicate = tasks.some(t => t.name.toLowerCase() === name.toLowerCase());
  if (duplicate) return alert("Task already exists!");

  // 🕒 Create task object
  const task = {
    id: Date.now(),
    name,
    done: false,
    createdAt: new Date().toLocaleString(),
    dueAt: new Date(dueDate).toLocaleString(),
    completedAt: null,
    editedAt: null
  };

  tasks.push(task);
  taskInput.value = "";
  taskDue.value = "";
  saveTasks();
  showTasks();
}

// 📋 Show All Tasks
function showTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  if (tasks.length === 0) {
    list.innerHTML = "<p style='text-align:center;color:#ccc;'>No tasks yet. 🎯</p>";
    return;
  }

  for (let t of tasks) {
    const li = document.createElement("li");

    // ⏰ Check if overdue
    const now = new Date();
    const dueDate = new Date(t.dueAt);
    let overdue = !t.done && dueDate < now;

    // 🕒 Build time info
    let timeText = `🕒 Created: ${t.createdAt}`;
    if (t.editedAt) timeText = `✏️ Edited: ${t.editedAt}`;
    if (t.done) timeText = `✅ Completed: ${t.completedAt}`;
    if (t.dueAt) timeText += ` | ⏰ Due: ${t.dueAt}`;
    if (overdue) timeText += ` ⚠️ Overdue!`;

    // 💬 Create HTML
    li.innerHTML = `
      <div class="task-info ${t.done ? 'completed' : ''}">
        <span>${t.name}</span>
        <small>${timeText}</small>
      </div>
      <div class="btns">
        <button class="done" onclick="toggleDone(${t.id})">✔️</button>
        <button class="edit" ${t.done ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''} onclick="editTask(${t.id})">✏️</button>
        <button class="delete" onclick="deleteTask(${t.id})">🗑️</button>
      </div>
    `;

    list.appendChild(li);
  }
}

// ✅ Toggle Done / Undo
function toggleDone(id) {
  for (let t of tasks) {
    if (t.id === id) {
      t.done = !t.done;
      t.completedAt = t.done ? new Date().toLocaleString() : null;
      break;
    }
  }
  saveTasks();
  showTasks();
}

// ✏️ Edit Task (only if not done)
function editTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task || task.done) return;

  const newName = prompt("Edit task name:", task.name);
  if (!newName || newName.trim() === "") return alert("Task name cannot be empty!");

  // Check duplicates
  const duplicate = tasks.some(t => t.name.toLowerCase() === newName.toLowerCase() && t.id !== id);
  if (duplicate) return alert("Another task already has this name!");

  task.name = newName.trim();
  task.editedAt = new Date().toLocaleString();

  saveTasks();
  showTasks();
}

// 🗑️ Delete Task
function deleteTask(id) {
  if (confirm("Delete this task?")) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    showTasks();
  }
}

// 💾 Save Tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
