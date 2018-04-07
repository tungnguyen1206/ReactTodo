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
var TodoSearch = require('TodoSearch');

/* 
* TodoSearch tests */
describe('TodoSearch', () => {

  // TodoSearch should exist  
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });
  
  // Should call onSearch with entered input
  it ('should call onSearch with entered input text', () => {
    // Create a spy
    var spy = expect.createSpy();
    // Instantiate the TodoSearch, plant the spy
    var _TodoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    // Select the DOM using jQuery
    var $el = $(ReactDOM.findDOMNode(_TodoSearch));
    // Set value for input box
    _TodoSearch.refs.searchText.value = 'Todo Todo';
    // Simulate the change of search box in TodoSearch
    TestUtils.Simulate.change(_TodoSearch.refs.searchText);

    // Veriry the spy has been called
    expect(spy).toHaveBeenCalledWith(false, 'Todo Todo');
  });

  // Should call onSearch with proper check value
  it ('should call onSearch with proper check value', () => {
    // Create a spy
    var spy = expect.createSpy();
    // Instantiate the TodoSearch, plant the spy
    var _TodoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    // Select the DOM using jQuery
    var $el = $(ReactDOM.findDOMNode(_TodoSearch));
    // Set value for input box
    _TodoSearch.refs.showCompleted.checked = true;
    // Simulate the submission of the first form in the TodoSearch
    TestUtils.Simulate.change(_TodoSearch.refs.showCompleted);

    // Veriry the spy has been called
    expect(spy).toHaveBeenCalledWith(true, '');
  });

});