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

});