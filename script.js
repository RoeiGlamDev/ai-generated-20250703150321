// Get the todo list element
const todoList = document.getElementById('todo-list');

// Get the todo input element
const todoInput = document.getElementById('todo-input');

// Get the add todo button element
const addTodoBtn = document.getElementById('add-todo-btn');

// Initialize an empty array to store the todo items
let todoItems = [];

// Function to add a new todo item
function addTodoItem(item) {
  // Create a new todo item object
  const todoItem = {
    text: item,
    completed: false
  };

  // Add the todo item to the array
  todoItems.push(todoItem);

  // Render the todo list
  renderTodoList();
}

// Function to render the todo list
function renderTodoList() {
  // Clear the todo list element
  todoList.innerHTML = '';

  // Loop through the todo items array
  todoItems.forEach((todoItem, index) => {
    // Create a new list item element
    const listItem = document.createElement('li');

    // Add the todo item text to the list item element
    listItem.textContent = todoItem.text;

    // Add a delete button to the list item element
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTodoItem(index);
    listItem.appendChild(deleteBtn);

    // Add an event listener to the list item element to toggle completion
    listItem.onclick = () => toggleCompletion(index);

    // Add the completed class to the list item element if the todo item is completed
    if (todoItem.completed) {
      listItem.classList.add('completed');
    }

    // Add the list item element to the todo list element
    todoList.appendChild(listItem);

    // Add the fade-in animation to the list item element
    listItem.classList.add('fade-in');
  });
}

// Function to delete a todo item
function deleteTodoItem(index) {
  // Remove the todo item from the array
  todoItems.splice(index, 1);

  // Render the todo list
  renderTodoList();
}

// Function to toggle the completion of a todo item
function toggleCompletion(index) {
  // Toggle the completed property of the todo item
  todoItems[index].completed = !todoItems[index].completed;

  // Render the todo list
  renderTodoList();
}

// Add an event listener to the add todo button element
addTodoBtn.addEventListener('click', () => {
  // Get the todo input value
  const todoInputValue = todoInput.value.trim();

  // Check if the todo input value is not empty
  if (todoInputValue !== '') {
    // Add a new todo item
    addTodoItem(todoInputValue);

    // Clear the todo input value
    todoInput.value = '';
  }
});

// Add an event listener to the todo input element to add a new todo item on Enter key press
todoInput.addEventListener('keypress', (e) => {
  // Check if the Enter key is pressed
  if (e.key === 'Enter') {
    // Add a new todo item
    addTodoItem(todoInput.value.trim());

    // Clear the todo input value
    todoInput.value = '';
  }
});