import React, {Component} from 'react';
import TodoItem from './TodoItem'; 
import PropTypes from 'prop-types';

/*
function Todos() {
  return (
    <div>
      <h1>Todos</h1>
    </div>
  );
}
*/

class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key = {todo.id} todo = {todo} markComplete = 
      {this.props.markComplete} delTodo = {this.props.delTodo} />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
