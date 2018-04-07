/* 
* Require react and react-dom */
var React = require('react');
var ReactDOM = require('react-dom');

/* 
* Require expect */
var expect = require('expect');

/* 
* Require jQuery */
var $ = require('jquery');

/* 
* Require react-addons-test-utils */
var TestUtils = require('react-addons-test-utils');

/* 
* Require Test components */
var TodoApp = require('TodoApp');

/* 
* TodoApp tests */
describe('TodoApp', () => {

  // TodoApp should exist  
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  // Should add todo properly
  it('should add todo to the todos state on handlingNewTodo', () => {
    var todoText = 'text todo';
    // Instantiate the TodoApp
    var _TodoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    // Clean todos state of TodoApp
    _TodoApp.setState({todos:[]});
    // Add new Todo
    _TodoApp.handlingNewTodo(todoText);

    // Verify result
    expect(_TodoApp.state.todos[0].text).toEqual(todoText);
  });

  it('should toggle completed value when handlingToggle called', () => {
    // Data for TodoApp
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: false
    };

    // Instantiate the TodoApp
    var _TodoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    // Set State for TodoApp
    _TodoApp.setState({todos: [todoData]});

    // Check that Todos first item has completed value of false
    expect(_TodoApp.state.todos[0].completed).toBe(false);

    // Call handlingToggle with 11
    _TodoApp.handlingToggle(11);

    // Verify that value changed
    expect(_TodoApp.state.todos[0].completed).toBe(true);

  });

});