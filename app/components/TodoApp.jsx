/* 
* Require react */
var React = require('react');

/* 
* Define Todo component
*
* This use Stateless Functional Component 
* For more information:
*   https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541 */
var TodoApp = (props) => {
  return ( 
    <div>
      <div className="row">
        <div className="columns small-centered small-10 medium-6 large-4">
          <h1>TodoApp Components</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
};

/* 
* Export the component */
module.exports = TodoApp;