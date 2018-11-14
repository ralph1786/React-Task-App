import React, { Component } from "react";

class AddTaskForm extends Component {
  state = {
    content: ""
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({
      content: ""
    });
  };

  onChangeHandler = e => {
    this.setState({
      content: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <label>Add New Tasks</label>
          <input
            type="text"
            onChange={this.onChangeHandler}
            value={this.state.content}
          />
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}

export default AddTaskForm;
