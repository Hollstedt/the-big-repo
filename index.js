const addTodo = () => {
    const todoList = document.querySelector('ul#todo-list');
    const todoInput = document.querySelector('input#todo-input');
    const todo = document.createElement("li");
    todo.innerHTML = `<input type="checkbox"/> <p>${todoInput.value}</p>`;
    todoList.append(todo);
}

document.querySelector('button#add-todo').addEventListener('click', addTodo);