import React, { Component } from "react";

class CreateTodoButton extends Component {
  render() {
    return <button onKeyUp={this.props.createTodo}>Add Todo</button>;
  }
}

export default CreateTodoButton;
