/* 
* Require react */
var React = require('react');

/* 
* Require node-uuid library */
var uuid = require('node-uuid');

/* 
* Require components */
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

/* 
* Define Todo component */
var TodoApp = React.createClass({
  
  /* 
  * This is data to pass into TodoList */
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: true,
        },{
          id: uuid(),
          text: 'Feed the cats',
          completed: false,
        },
        {
          id: uuid(),
          text: 'Clean the bedroom',
          completed: true,
        },{
          id: uuid(),
          text: 'Cook dinner',
          completed: false,
        }
      ],
    }
  },

  /* 
  * This function handle search Todo */
  handlingSearchTodo: function(_showCompleted, _searchText) {
    var _TodoApp = this;
    _TodoApp.setState({
      showCompleted: _showCompleted,
      searchText: _searchText
    });
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
          id: uuid(),
          text: _newTodoText,
          completed: false,
        }
      ]
    });
  },

  /* 
  * Handle toggle todos */
  handlingToggle: function(_id) {
    // Avoid 'this'
    var _TodoApp = this;
    // Update the Todos array
    var updatedTodos = _TodoApp.state.todos.map((todo) => {
      if (todo.id === _id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    _TodoApp.setState(updatedTodos);
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
            <TodoSearch onSearch={_TodoApp.handlingSearchTodo}/>
            <TodoList todoList={todos} onToggle={_TodoApp.handlingToggle}/>
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