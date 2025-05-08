// DOM Elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const filterBtns = document.querySelectorAll(".filter-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Render Todos
function renderTodos(filter = "all") {
  todoList.innerHTML = "";
  const filteredTodos = filter === "all" 
    ? todos 
    : filter === "active" 
    ? todos.filter(todo => !todo.completed) 
    : todos.filter(todo => todo.completed);

  filteredTodos.forEach(todo => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;
    li.innerHTML = `
      <span>${todo.text}</span>
      <div>
        <button class="complete-btn">${todo.completed ? "✅" : "☑️"}</button>
        <button class="delete-btn">❌</button>
      </div>
    `;
    todoList.appendChild(li);

    // Complete Todo
    li.querySelector(".complete-btn").addEventListener("click", () => {
      todo.completed = !todo.completed;
      saveTodos();
      renderTodos(filter);
    });

    // Delete Todo
    li.querySelector(".delete-btn").addEventListener("click", () => {
      todos = todos.filter(t => t !== todo);
      saveTodos();
      renderTodos(filter);
    });
  });
}

// Add New Todo
addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text) {
    todos.push({ text, completed: false });
    saveTodos();
    renderTodos();
    todoInput.value = "";
  }
});

// Filter Todos
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderTodos(btn.dataset.filter);
  });
});

// Save to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Initial Render
renderTodos();
