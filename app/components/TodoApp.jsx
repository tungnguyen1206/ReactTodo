/* 
* Require react */
var React = require('react');

/* 
* Require components */
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

/* 
* Define Todo component */
var TodoApp = React.createClass({
  
  /* 
  * This is data to pass into TodoList */
  getInitialState: function() {
    return {
      todos: [
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
        },{
          id: 4,
          text: 'Cook dinner',
        }
      ],
    }
  },

  /*
  * This function handle new Todo input */
  handlingNewTodo: function(_newTodoText) {
    var _TodoApp = this;
    // Get old todos array
    var oldTodos = _TodoApp.state.todos;
    // Push new todo to todos array
    _TodoApp.setState({
      todos: [
        /* 
        * Spread syntax:
        *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax */
        ...oldTodos,
        {
          id: Math.floor(5 + 56785 * Math.random()),
          text: _newTodoText
        }
      ]
    });
  },

  /* Render the component */
  render: function() {

    var _TodoApp = this;

    // Get values
    var {todos} = _TodoApp.state;

    return ( 
      <div>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <TodoList todoList={todos}/>
            <AddTodo onNewTodo={_TodoApp.handlingNewTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

/* 
* Export the component */
module.exports = TodoApp;