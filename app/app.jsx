/* 
* Require React and react-dom */
var React = require('react');
var ReactDOM = require('react-dom');

/* 
* Require react router
* This use Destructuring assignment
* Reference:
*   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment */
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

/* 
* Require components */
var TodoApp = require('TodoApp');

/* 
* Load foundation
* Need ! leading the string, don't know why... 
*  */
// require('!style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

/* 
* Load our custom style */
require('!style!css!sass!applicationStyle');

/* Render component to DOM emement */
ReactDOM.render(
  /* 
  * To do routing:
  *   1. Create the path and route to component
  *   2. Create the component in components folder
  *   3. Add the component name to webpack config alias
  *   4. Require the component in our app
  * 
  * Weather is children of Main component, 
  * we can specify where to render it in Main component
  * 
  * When '/' -> Weather
  * When '/about' -> About
  * When '/examples' -> Examples
  */
  <TodoApp/>,
  document.getElementById('app')
);  