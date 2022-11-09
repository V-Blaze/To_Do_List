import Utility from './utils.js'


describe('Add new task', () => {

    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
        localStorage.setItem.mockClear();
      });

    test('Adding a new object to local storage', () => {
        const obj = {description: 'Practice Javascript', index: 1, completed: false};
        Utility.addTodoTask(obj.description)
        
        const result = Utility.getLocalStorageData()

        expect(result.length).toBe(1)
        expect(localStorage.__STORE__["todoList"]).toBe(JSON.stringify([obj]));
    })

    test('Adding a second object to local storage', () => {
        const obj = {description: 'Practice Testing', index: 1, completed: false};
        Utility.addTodoTask(obj.description)
        
        const result = Utility.getLocalStorageData()

        expect(result.length).toBe(1)
        expect(localStorage.setItem).toHaveBeenLastCalledWith('todoList', JSON.stringify([obj]));
    })


})
