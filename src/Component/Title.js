import React, { Component } from "react";

class Title extends Component {
  render() {
    return <h2>To Do List({this.props.todos.length})</h2>;
  }
}

export default Title;
