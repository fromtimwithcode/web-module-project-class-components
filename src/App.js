import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
    id: 1,
    task: 'Completed Todoizt',
    completed: false
  },
  {
    id: 2,
    task: 'Test Task',
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todo: todo
  }

  handleAdd = (task) => {
    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false
    };

    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTodo]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>Todoizt</h2>
          <TodoForm handleAdd={this.handleAdd} />
        </div>
        <TodoList todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
