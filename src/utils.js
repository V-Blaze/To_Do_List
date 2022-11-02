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


}