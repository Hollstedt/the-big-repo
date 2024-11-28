const addTodo = () => {
  const todoList = document.querySelector("ul#todo-list");
  const todoInput = document.querySelector("input#todo-input");
  const todo = document.createElement("li");
  todo.innerHTML = `<div><input type="checkbox" id="${todoInput.value}"/> <label for="${todoInput.value}"> ${todoInput.value}</label></div><div class="btn-container"><button class="remove-todo">X</button></div>`;
  todoList.append(todo);
  todoInput.value = "";
  //   updateCheckboxes();
  let checkboxes = document.querySelectorAll(
    'ul#todo-list input[type="checkbox"]'
  );
  checkboxes.forEach((box) =>
    box.addEventListener(
      "change",
      (event) =>
        (event.target.nextElementSibling.style.textDecoration = event.target
          .checked
          ? "line-through"
          : "none")
    )
  );
  let removeBtns = document.querySelectorAll(
    'ul#todo-list button.remove-todo'
  );
  removeBtns.forEach((btn) => btn.addEventListener("click", (event) => {
      event.target.closest("li").remove();
  }));
};

document.querySelector("button#add-todo").addEventListener("click", addTodo);
