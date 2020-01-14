import React from "react";

class AddTask extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      date: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = () => {
    var taskData = {
      task: this.state.task,
      date: this.state.date
    };
    fetch("http://localhost:3000/api/v1/task/task-assignment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskData)
    })
      .then(res => res.json())
      .then(task => {
        alert("Task Added Sucessfully");
      });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Add Tasks!</h1>
        <input
          type="text"
          placeholder="Enter Task"
          name="task"
          onChange={this.handleChange}
        />
        <input type="date" name="date" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add-Task</button>
      </React.Fragment>
    );
  }
}

export default AddTask;
