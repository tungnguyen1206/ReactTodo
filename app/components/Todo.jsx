/* 
* Require react */
var React = require('react');

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
  * Using an arrow function in render creates a new function
  * each time the component renders, which may have performance
  * implications. For more informations: 
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
    var {id, text, completed} = _Todo.props;

    return (
      <div onClick={_Todo.onToggle(id)}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    );
  }
});

/* 
* Export the component */
module.exports = Todo;