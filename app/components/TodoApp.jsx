/* 
* Require react */
var React = require('react');

/* 
* Require components */
var TodoList = require('TodoList');

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
          </div>
        </div>
      </div>
    );
  }
});

/* 
* Export the component */
module.exports = TodoApp;