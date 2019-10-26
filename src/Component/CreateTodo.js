import React, { Component } from "react";
import TodoInput from "./TodoInput";
import CreateTodoButton from "./CreateTodoButton";

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = { inputText: "" };
  }
  createTodo() {
    //当子元素onchange发生，更新inputtext后，执行下面的语句
    if (this.state.inputText.trim) {
      console.log(this.props.add);
      this.props.add && this.props.add(this.state.inputText);
      this.setState({ inputText: "" });
    }
  }
  updateInputText(e) {
    this.setState({ inputText: e.target.value });
  }

  render() {
    return (
      <div>
        <TodoInput
          inputText={this.state.inputText}
          //子元素里onchange这个事件发生时
          updateInputText={e => {
            this.updateInputText(e);
          }}
        />
        <CreateTodoButton
          createTodo={() => {
            this.createTodo();
          }}
        />
      </div>
    );
  }
}

export default CreateTodo;
