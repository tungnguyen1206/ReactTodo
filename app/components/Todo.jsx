/* 
* Require react */
var React = require('react');

/* 
* Require moment */
var moment = require('moment');

/* 
* Define Todo component */
var Todo = React.createClass({

  //  PropTypes 
  propTypes: {
    onToggle: React.PropTypes.func,
  },

  /* 
  * Handle toggle todo 
  * 
  * Use function returns function because we need to push up 
  * the reference of function, not value of function
  * For more informations: 
  *   https://reactjs.org/docs/faq-functions.html */
  onToggle: function(_id) {
    // Avoid 'this'
    var _Todo = this;
    return () => {
      _Todo.props.onToggle(_id);      
    };
  },

  /* Render the component */
  render: function() {

    var _Todo = this;
    
    // Get values
    var {id, text, completed, createdAt, completedAt} = _Todo.props;

    // Render timeStamp
    var renderTimeStamp = () => {
      // Uncompleted
      var timeStamp = createdAt;
      var message = "Created ";

      // Completed
      if (completed) {
        timeStamp = completedAt;
        message = "Completed ";
      }

      return message + moment.unix(timeStamp).format('MMMM Do, YYYY @ hh:mm A');
    };

    return (
      <div onClick={_Todo.onToggle(id)}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderTimeStamp()}</p>
      </div>
    );
  }
});

/* 
* Export the component */
module.exports = Todo;