function addTask(e) {
  e.preventDefault();
  // console.log(taskInput);
  if (taskInput.value.trim()) {
    const li = document.createElement("li");

    li.textContent = taskInput.value;

    // Criando botão de exclusão de tarefa
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete");

    taskList.appendChild(li);

    taskInput.value = "";
  } else {
    alert("Por favor, digite uma tarefa");
  }
}
