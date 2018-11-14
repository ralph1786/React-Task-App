import React, { Component } from "react";
import Tasks from "./components/Tasks";
import AddTaskForm from "./components/AddTaskForm";

class App extends Component {
  state = {
    tasks: [
      { id: 1, content: "Buy some chicken" },
      { id: 2, content: "Wash the car" }
    ]
  };

  deleteTaskHandler = id => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({
      tasks: tasks
    });
  };

  addTaskHandler = task => {
    task.id = Math.random();
    let tasks = [...this.state.tasks, task]; //making a copy of the array in the state.
    this.setState({
      tasks: tasks
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="center pink-text text-lighten-2">My Tasks!</h1>
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTaskHandler} />
        <AddTaskForm addTask={this.addTaskHandler} />
      </div>
    );
  }
}

export default App;
