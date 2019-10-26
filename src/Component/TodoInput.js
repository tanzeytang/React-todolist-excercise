import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    return (
      <input
        value={this.props.inputText}
        type="text"
        placeholder="input your new todo"
        onChange={this.props.updateInputText}
      />
    );
  }
}

export default TodoInput;
