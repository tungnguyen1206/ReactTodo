/* 
* Require react and react-dom */
var React = require('react');
var ReactDOM = require('react-dom');

/* 
* Require expect */
var expect = require('expect');

/* 
* Require Test components */
var TodoAPI = require('TodoAPI');

/* 
* TodoAPI tests */
describe('TodoAPI', () => {

  // TodoAPI should exist  
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {

    // This method runs before every test
    beforeEach(() => {
      localStorage.removeItem('todos');
    });

    // Set todos properly with valid input
    it('should set valid todos array', () => {
      // Test data
      var todos = [{
        id:23,
        text: 'test text',
        completed: false
      }];
      // Save to localStorage
      TodoAPI.setTodos(todos);
      // Get data from localStorage
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      // Verify the result
      expect(actualTodos).toEqual(todos);
    });

    // Not set todos with invalid input
    it('should not set invalid todos array', () => {
      // Test data
      var badTodos = {
        abc: 'xyz',
      };
      // Save to localStorage
      TodoAPI.setTodos(badTodos);
      // Get data from localStorage
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      // Verify the result
      expect(actualTodos).toBe(null);
    });
  });

  describe('getTodos', () => {
    // With empty local storage
    it('should returns empty array for bad localStorage', () => {
      // get Todos from empty localStorage
      var actualTodos = TodoAPI.getTodos();
      // Result must be an empty array
      expect(actualTodos).toEqual([]);
    });

    // With non-empty local storage
    it('should returns proper array for good localStorage', () => {
      // Test data
      var todos = [{
        id:23,
        text: 'test text',
        completed: false
      }];
      // Save to localStorage
      localStorage.setItem('todos', JSON.stringify(todos));

      // get Todos from empty localStorage
      var actualTodos = TodoAPI.getTodos();
      // Result and origin data must be the same
      expect(actualTodos).toEqual(todos);
    }); 
  });
  
  describe('filterTodos', () => {
    // Test data
    var todos = [{
      id:23,
      text: 'test text',
      completed: false
    }, {
      id:24,
      text: 'test',
      completed: true
    }, {
      id:25,
      text: 'kennyS',
      completed: false
    }];

    // Show completed 
    it('should return all items of showCompleted is true', () => {
      // Filt
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      // Verify result
      expect(filteredTodos.length).toBe(3);
    });

    // Don't show completed
    it('should only return items of showCompleted is false', () => {
      // Filt
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      // Verify result
      expect(filteredTodos.length).toBe(2);
    });

    // Sort by completed
    it('should sort by completed status', () => {
      // Sort
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      // Verify result
      expect(filteredTodos[0].completed).toBe(false);
      expect(filteredTodos[1].completed).toBe(false);
      expect(filteredTodos[2].completed).toBe(true);
    });

    // Searching properly with empty search text
    it('should perform proper search with empty search text', () => {
      // Search
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      // Verify result
      expect(filteredTodos.length).toBe(3);
    });

    // Searching properly with non-empty search text
    it('should perform proper search with non-empty search text', () => {
      // Search
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'test');
      // Verify result
      expect(filteredTodos.length).toBe(2);
    });
  });

});