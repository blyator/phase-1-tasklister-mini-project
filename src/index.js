document.addEventListener("DOMContentLoaded", () => {});
const form = document.getElementById("create-task-form");
const taskInput = document.getElementById("new-task-description");
const taskList = document.getElementById("tasks");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value;

  if (taskText.trim() !== "") {
    // Create the list item
    const newTask = document.createElement("li");

    // Add the task text directly (this is what the test is looking for)
    newTask.textContent = taskText;

    // Add to the list
    taskList.appendChild(newTask);

    // Clear the input
    taskInput.value = "";

    // Create and add the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      newTask.remove();
    });

    // Add the button to the list item
    newTask.appendChild(deleteBtn);
  }
});
