import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './styles.scss';

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

  handleToggleComplete = (id) => {
    this.setState({
      ...this.setState({
        todo: this.state.todo.map((task) => {
          if(task.id === id) {
            return({
              ...task,
              completed: !task.completed
            });
          } else {
            return(task);
          }
        })
      })
    });
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

  handleClear = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((item) => {
        return(item.completed === false);
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>Todoizt</h2>
          <TodoForm handleAdd={this.handleAdd} handleClear={this.handleClear} />
        </div>
        <TodoList todo={this.state.todo} handleToggleComplete={this.handleToggleComplete} />
      </div>
    );
  }
}

export default App;
