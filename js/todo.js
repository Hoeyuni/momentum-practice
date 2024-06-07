const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];

function saveTodos() {
  console.log("saveTodos, todos :", [...todos]);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  console.log("before: deleteTodo,todos: ", todos);
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  console.log("after: deleteTodo,todos: ", todos);
  console.log("li.id: ", li.id);

  saveTodos();
}

function paintTodo(newtodo) {
  const li = document.createElement("li");
  li.id = newtodo.id;
  const span = document.createElement("span");
  span.innerText = newtodo.text;
  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
  li.appendChild(span);
  todoList.appendChild(li);
}

function handletodoSubmit(event) {
  event.preventDefault();
  const newtodo = todoInput.value;
  todoInput.value = "";
  const newtodoArr = {
    text: newtodo,
    id: Date.now(),
  };
  todos.push(newtodoArr);
  paintTodo(newtodoArr);
  saveTodos();
  console.log("newtodoArr :", newtodoArr);
}

todoForm.addEventListener("submit", handletodoSubmit);

const savedTodos = localStorage.getItem("todos");

const parsedToDos = JSON.parse(savedTodos);

for (i = 0; i < parsedToDos.length; i++) {
  paintTodo(parsedToDos[i]);
  console.log(parsedToDos);
}
