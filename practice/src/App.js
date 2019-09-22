import React from 'react';
import logo from './logo.svg';
import TodoInput from './Components/TodoInput';
import TodoUnit from './Components/TodoUnit'; 
import './App.css';

window.id = 0; 

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  addTodo(val){
    const todo = {text: val, id: window.id++}
    this.state.data.push(todo); 
    this.setState({data: this.state.data}); 
  }
  
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <div className="todo-form">
          <TodoInput />
          <div className="todo-list">
            <TodoUnit />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
