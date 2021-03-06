import React, { Component} from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

/*
function App() {

  let state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Study React Library',
        completed: false
      }
    ]
  } 

   
  return (
    <div className="App">
        <Todos />
    </div>
  );
}
*/

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false 
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Study React Library',
        completed: false
      }
    ]
  } 

  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  // Add Todo
  addTodo = (title) => {
    console.log(title)
  }

  render(){
    return (
      <div className="App">
        <div className="container">
            <Header />
            <AddTodo addTodo = {this.addTodo} />
            <Todos todos={this.state.todos} markComplete = {this.markComplete} 
            delTodo = {this.delTodo} />
        </div>
      </div>
    );
  }

}

export default App;
 