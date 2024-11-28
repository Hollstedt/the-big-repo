const addTodo = () => {
  const todoList = document.querySelector("ul#todo-list");
  const todoInput = document.querySelector("input#todo-input");
  const todo = document.createElement("li");
  todo.innerHTML = `<div><input type="checkbox" id="${todoInput.value}"/> <label for="${todoInput.value}"> ${todoInput.value}</label></div>`;
  todoList.append(todo);
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
};

document.querySelector("button#add-todo").addEventListener("click", addTodo);
