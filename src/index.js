document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
          <button class="delete-btn">✕</button>
        </div>
      `;

      taskList.appendChild(newTask);

      taskInput.value = "";

      const deleteBtn = newTask.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", function () {
        newTask.remove();
      });
    }
  });
});
