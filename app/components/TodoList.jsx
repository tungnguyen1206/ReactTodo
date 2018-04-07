/* 
* Require react */
var React = require('react');

/* 
* Require components */
var Todo = require('Todo');

/* 
* Define TodoList component */
var TodoList = React.createClass({

  //  PropTypes 
  propTypes: {
    todoList: React.PropTypes.array,
  },


  render: function() {
    // Avoid 'this'
    var _TodoList = this;

    // Get values
    var {todoList} = _TodoList.props;

    /* 
    * Loop through todos array and render each todo */
    var renderTodos = function() {
      return todoList.map((todo) => {
        return (
          /* 
          * Spread syntax: {...todo} -> id={2} text={"Some text"}
          *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax */
          <Todo key={todo.id} {...todo}/> 
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }

});

/* 
* Export the component */
module.exports = TodoList;