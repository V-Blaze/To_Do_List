import Interactive from './interactive.js';

describe('Toggle', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = '<div class="todo_lists">'
    + '<li></li>'
    + '</div>';
    const obj = { description: 'Test task', completed: false, index: 1 };
    window.localStorage.setItem('todoList', JSON.stringify([obj]));
  }); 
  test('Toggle function to change the completed status', () => {
    // Arrange and Act
    const id = 0;
    const curStatus = true;
    const toggleSpy = jest.spyOn(Interactive, 'toggleCompleted');
    Interactive.toggleCompleted(id, curStatus);

    // Assert
    expect(toggleSpy).toHaveBeenCalledTimes(1);
    const result = JSON.parse(window.localStorage.getItem('todoList'))[id]
      .completed;
    expect(result).toBe(true);
  });
  test('Toggle function to change the completed status twice', () => {
    // Arrange and Act
    const id = 0;
    const curStatus = true;
    const toggleSpy = jest.spyOn(Interactive, 'toggleCompleted');
    Interactive.toggleCompleted(id, curStatus);

    // Assert
    expect(toggleSpy).toHaveBeenCalledTimes(1);
    const result = JSON.parse(window.localStorage.getItem('todoList'))[id]
      .completed;
    expect(result).toBe(true);

    Interactive.toggleCompleted(id, false);
    // Assert
    expect(toggleSpy).toHaveBeenCalledTimes(2);
    const result2 = JSON.parse(window.localStorage.getItem('todoList'))[id]
      .completed;
    expect(result2).toBe(false);
  });
});

describe('Clear all completed status', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = '<div class="todo_lists">'
    + '<li></li>'
    + '</div>';
    const obj = { description: 'Test task', completed: false, index: 1 };
    const obj2 = { description: 'Second task', completed: true, index: 2 };
    const obj3 = { description: 'This is object 3', completed: false, index: 3 };
    const obj4 = { description: 'Task number four', completed: true, index: 4 };
    window.localStorage.setItem('todoList', JSON.stringify([obj, obj2, obj3, obj4]));
  });
  test('clear all current completed expected to clear 2 tasks-', () => {
    // Arrange and Act

    const deleteCompletedTasksSpy = jest.spyOn(Interactive, 'deleteAllCompleted');
    Interactive.deleteAllCompleted();

    // Assert
    expect(deleteCompletedTasksSpy).toHaveBeenCalledTimes(1);
    const result = JSON.parse(window.localStorage.getItem('todoList'))
    expect(result).toHaveLength(2);
  });
  
  test('Edit description', () => {
    // Arrange and Act
    const deleteCompletedTasksSpy = jest.spyOn(Interactive, 'deleteAllCompleted');
    const todoList = JSON.parse(window.localStorage.getItem('todoList'));
    // Interactive.deleteAllCompleted();
    
    todoList.forEach((item) => item['completed'] = true)
    window.localStorage.setItem('todoList', JSON.stringify(todoList))
    Interactive.deleteAllCompleted();


    // Assert
    expect(deleteCompletedTasksSpy).toHaveBeenCalledTimes(1);
    const result = JSON.parse(window.localStorage.getItem('todoList'))
    console.log(result)
    expect(result).toHaveLength(0);
  });
});