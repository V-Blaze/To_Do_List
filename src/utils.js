import Todo from './todo.js'

export default class Methods {
static setLocalStorageData = (todo) => {
    let item = JSON.stringify(todo)
    localStorage.setItem('todoList', item)
};

static getLocalStorageData = () => {
    let todoList;

    if (JSON.parse(localStorage.getItem('todoList')) === null) {
    todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem('todoList'));
    }

    return todoList;
};

static addBtnRemoveEvent = () => {
    document.querySelectorAll('.trash-can').forEach((button) => button.addEventListener('click', (event) => {
      event.preventDefault();
    //   const { id } = button;
  console.log(event.target.attributes.id.value, button.id)
    }));
};

static creatTodoItemsHtml = ({description, index}) => {
    
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.innerHTML = `
      <div class="todo_detail">
      <input type="checkbox" id="" name="" value=""> <h3 class="item">${description}</h3> <i></i>
      </div>
      <div>
      <button class="trash-can" id="${index}"><i class="fa-regular fa-pen-to-square"></i></button>
      <button class="trash-can" id="${index}"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      `;
  
    return div;
}

static showTodoItems = () => {
    const todoList = this.getLocalStorageData()
    document.querySelector('.todo_lists').innerHTML = ``;
    todoList.forEach((item) => {
        document.querySelector('.todo_lists').append(this.creatTodoItemsHtml(item));
      });
this.addBtnRemoveEvent()
}

static addTodoItem = (description) => {
    const todoList = this.getLocalStorageData()
    const index = todoList.length + 1
    console.log(todoList.length)
    const newTodoItem = new Todo (description, index );

    todoList.push(newTodoItem)
    console.log(newTodoItem)
    this.setLocalStorageData(todoList)
    this.showTodoItems()
};
}