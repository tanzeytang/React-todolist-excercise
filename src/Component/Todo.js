import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todo } = this.props;
    return <h3>{todo}</h3>;
  }
}

export default Todo;
