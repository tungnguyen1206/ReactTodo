/* 
* Require react */
var React = require('react');

/* 
* Define Todo component */
var Todo = React.createClass({

  //  PropTypes 
  propTypes: {
    todo: React.PropTypes.object,
  },


  render: function() {

    var _Todo = this;
    
    // Get values
    // var {todo} = _Todo.props;
    var {id, text} = _Todo.props;

    return (
      <div>
        <p>{`${id}. ${text}`}</p>
      </div>
    );
  }
});

/* 
* Export the component */
module.exports = Todo;