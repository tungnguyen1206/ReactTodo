/* 
* Require jQuery */
var $ = require('jquery');

/* 
* This API is used to store and retrieve data from local storage
* module.exports is an object
* */
module.exports = {
  /* 
  * Save todo to local storage */
  setTodos: function(_todos) {
    if ($.isArray(_todos)) {
      localStorage.setItem('todos', JSON.stringify(_todos));
      return _todos;
    }
  },

  /* 
  * Get todo from local storage */
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    // Handling errors
    try {
      var todos = JSON.parse(stringTodos);
    } catch (e) {
      console.log(e);
    }

    // Check the result
    if ($.isArray(todos)) {
      return todos;
    } else {
      return [];
    }

  }
};