import './style.css';
import Methods from './utils.js'

const todoForm = document.getElementById('todo-form');
const todoFormInput = document.getElementById('todo-input');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  Methods.addTodoItem(todoFormInput.value)
  todoFormInput.value = '';
})

Methods.showTodoItems()


