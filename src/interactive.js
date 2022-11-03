import Methods from './utils.js'

export default class Interactive {

static toggleCompleted = (id, curStatus) => {
    let todoList = Methods.getLocalStorageData()
    todoList[id].completed = curStatus
    Methods.setLocalStorageData(todoList)
    Methods.showTodoItems()
}

static addCheckEvent = () => {
    document.querySelectorAll('.checkbox').forEach((box) => box.addEventListener('click', () => {
        // event.preventDefault();
        let id;
        let curStatus;
        if (box.id > 0) {
            id = box.id - 1;
            } else {
                id = 0;
            }

    if(box.checked === true){
        console.log('checked box', box.id)
        curStatus = true
    } else if (box.checked !== true) {
        console.log('Unchecked box', box.id)
        curStatus = false
    }

    this.toggleCompleted(id, curStatus)
        
    }));
};


static deleteAllCompleted = () => {
    let todoList = Methods.getLocalStorageData()
    
    todoList = todoList.filter((item) => item.completed !== true);
    Methods.reassignIndex(todoList);
    Methods.setLocalStorageData(todoList);
    Methods.showTodoItems()
}

}