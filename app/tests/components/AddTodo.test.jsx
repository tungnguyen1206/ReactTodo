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
var AddTodo = require('AddTodo');

/* 
* AddTodo tests */
describe('AddTodo', () => {

  // AddTodo should exist  
  it('should exist', () => {
    expect(AddTodo).toExist();
  });
  
  // Should call onSetCountdown with good input 
  it ('should call onSetCountdown with good input', () => {
    // Create a spy
    var spy = expect.createSpy();
    // Instantiate the AddTodo, plant the spy
    var _AddTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
    // Select the DOM using jQuery
    var $el = $(ReactDOM.findDOMNode(_AddTodo));
    // Set value for input box
    _AddTodo.refs.todotexts.value = 'Go to the market';
    // Simulate the submission of the first form in the AddTodo
    TestUtils.Simulate.submit($el.find('form')[0]);

    // Veriry the spy has been called
    expect(spy).toHaveBeenCalledWith('Go to the market');
  });

  // Should not call onSetCountdown with bad input 
  it ('should not call onSetCountdown with bad input', () => {
    // Create a spy
    var spy = expect.createSpy();
    // Instantiate the AddTodo, plant the spy
    var _AddTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
    // Select the DOM using jQuery
    var $el = $(ReactDOM.findDOMNode(_AddTodo));
    // Set value for input box
    _AddTodo.refs.todotexts.value = '';
    // Simulate the submission of the first form in the AddTodo
    TestUtils.Simulate.submit($el.find('form')[0]);

    // Veriry the spy has been called
    expect(spy).toNotHaveBeenCalled();
  });

});