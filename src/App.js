import React, { Component } from "react";
import Title from "./Component/Title";
import CreateTodo from "./Component/CreateTodo";
import TodoList from "./Component/TodoList";

class App extends Component {
  constructor() {
    super();
    let todos = [
      "buy milk",
      "charge",
      "go to the bank",
      "buy toothpaste",
      "buy some fruit"
    ];
    this.state = {
      todos: todos
    };
  }

  add(newtodo) {
    this.setState({
      todos: [...this.state.todos, newtodo]
    });
  }

  render() {
    return (
      <div>
        <Title todos={this.state.todos} />
        <CreateTodo
          todos={this.state.todos}
          add={n => {
            this.add(n);
          }}
        />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
