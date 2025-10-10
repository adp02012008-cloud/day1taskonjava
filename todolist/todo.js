var ul = document.getElementById("list-container");//unordered list
var input = document.getElementById("input");//task input

function add() {
  if (input.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  var listitem = document.createElement("li");
  listitem.innerHTML = input.value.trim() + 
    " <button onclick='deleteItem(event)'>Delete</button>";

  ul.append(listitem);
  input.value = "";
}

function deleteItem(event) {
  event.target.parentElement.remove();
}
