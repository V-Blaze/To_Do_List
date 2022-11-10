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