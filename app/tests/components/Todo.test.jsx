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

});