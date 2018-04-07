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
var Todo = require('Todo');

/* 
* Todo tests */
describe('Todo', () => {

  // Todo should exist  
  it('should exist', () => {
    expect(Todo).toExist();
  });  

  // Should call onToggle method
  it('should call onToggle prop with id on click', () => {
    
    var todoData = {
      id: 34,
      text: 'Some text',
      completed: true,
    };

    // Create a spy
    var spy = expect.createSpy();
    // Instantiate the AddTodo, plant the spy
    var _Todo = TestUtils.renderIntoDocument(<Todo onToggle={spy} {...todoData}/>);
    // Select the DOM using jQuery
    var $el = $(ReactDOM.findDOMNode(_Todo));
    // Simulate the click event on Todo
    TestUtils.Simulate.click($el[0]);

    // Veriry the spy has been called
    expect(spy).toHaveBeenCalledWith(34);
  });

});