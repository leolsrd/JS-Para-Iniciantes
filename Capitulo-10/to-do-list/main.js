const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const filterInput = document.querySelector("#filter-input");

function addTask(e) {
  e.preventDefault();
  // console.log(taskInput);
  if (taskInput.value.trim()) {
    const li = document.createElement("li");

    li.textContent = taskInput.value;
    li.style.paddingTop = "10px";

    // Criando botão de exclusão de tarefa
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.marginLeft = "4px";
    deleteButton.classList.add("delete");

    // Adicionando o botão de exclusão ao li
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    // Adicionando a tarefa ao localStorage
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = "";
  } else {
    alert("Por favor, digite uma tarefa");
  }
}

// Função para deletar uma task
function deleteTask(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Tem certeza de que deseja excluir esta tarefa?")) {
      e.target.parentElement.remove();

      // Removendo tarefa do localStorage
      removeTaskFromLocalStorage(e.target.parentElement);
    }
  }
}

// Função para recuperar as task salvas em local storage
function getTasks() {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    const li = document.createElement("li");

    li.textContent = task;
    li.style.paddingTop = "10px";

    // Criando botão de exclusão de tarefa
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.marginLeft = "4px";
    deleteButton.classList.add("delete");

    // Adicionando o botão de exclusão ao li
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}

// Função para armazenamento no localStorage
function storeTaskInLocalStorage(task) {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Função para remover tarefa do localStorage
function removeTaskFromLocalStorage(taskItem) {
  // Pegar tarefa do localStorage
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  // Pegar apenas o texto da tarefa, sem o "X"
  let taskText = taskItem.textContent.slice(0, -1);

  task.forEach(function (task, index) {
    if (taskText === null) {
      tasks.aplice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll("#task-list li").forEach(function (task) {
    const item = task.firstChild.textContent;
    console.log(item);
    if (item.toLowerCase().indexOf(text) !== -1) {
      console.log(item.toLowerCase().indexOf(text));
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

form.addEventListener("submit", addTask);
// Adicionar evento de click para exclusão de tarefa
taskList.addEventListener("click", deleteTask);
// Adicionar evento ao DOMContentLoaded para recuperar as tarefas.
document.addEventListener("DOMContentLoaded", getTasks);
// Adicionar evento de tecla para campo do filtro
filterInput.addEventListener("keyup", filterTasks);
