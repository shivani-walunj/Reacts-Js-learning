import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: " ",
      comments: " ",
      topic: "react",
    };
  }

  handleUsernameChange = (event) => {
    console.log(event);
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    console.log(event);
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicchange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicchange}>
            <option value="react"> React </option>
            <option value="angular"> angular </option>
            <option value="vue"> vue </option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
