document.addEventListener("DOMContentLoaded", () => {});
const form = document.getElementById("create-task-form");
const taskInput = document.getElementById("new-task-description");
const taskList = document.getElementById("tasks");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value;

  if (taskText.trim() !== "") {
    const newTask = document.createElement("li");

    newTask.textContent = taskText;

    taskList.appendChild(newTask);

    taskInput.value = "";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      newTask.remove();
    });

    newTask.appendChild(deleteBtn);
  }
});
