import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // Binding the clickHandler method to the current instance
    this.clickHandler = this.clickHandler.bind(this);
  }

  // Arrow function to ensure 'this' refers to the instance of EventBind
  clickHandler() {
    this.setState({
      message: "GoodBye!",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Binding clickHandler in the render method */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
