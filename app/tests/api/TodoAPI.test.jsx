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
  
  

});