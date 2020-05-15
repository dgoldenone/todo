import React, {Component} from 'react';
import TodoItem from './TodoItem'; 

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
      <TodoItem />
    ));
  }
}

export default Todos;
