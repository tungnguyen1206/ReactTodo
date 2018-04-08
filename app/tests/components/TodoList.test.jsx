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
var TodoList = require('TodoList');
var Todo = require('Todo');

/* 
* TodoList tests */
describe('TodoList', () => {

  // TodoList should exist  
  it('should exist', () => {
    expect(TodoList).toExist();
  });  

  // Should render properly
  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Walk the dog',
      },{
        id: 2,
        text: 'Feed the cats',
      },
      {
        id: 3,
        text: 'Clean the bedroom',
      }
    ];

    // Instantiate TodoList component
    var _TodoList = TestUtils.renderIntoDocument(<TodoList todoList={todos}/>);
    // Get all components with Type was rendered in Root, return an array
    var todoComponents = TestUtils.scryRenderedComponentsWithType(/* Root */_TodoList, /* Type */Todo)

    // Verify the result
    expect(todoComponents.length).toEqual(todos.length);
  });

  // Should render properly
  it('should render Nothing to do message', () => {
    var todos = [];

    // Instantiate TodoList component
    var _TodoList = TestUtils.renderIntoDocument(<TodoList todoList={todos}/>);
    var $el = $(ReactDOM.findDOMNode(_TodoList));

    // Verify the result
    expect($el.find('.container-message').length).toEqual(1);
  });

});