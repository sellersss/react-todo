import React, { Component } from "react";
import "./Todo.css";
import EditTodoForm from "./EditTodoForm";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  handleDelete() {
    this.props.removeTodo(this.props.todo.id);
  }
  toggleForm() {
    this.setState({ editable: !this.state.editable });
  }
  updateTodo(todo) {
    this.props.modifyTodo(todo);
    this.toggleForm();
  }
  toggleCompleted() {
    this.props.completeTodo(this.props.todo.id);
  }
  render() {
    let result;
    if (this.state.editable) {
      result = (
        <EditTodoForm todo={this.props.todo} updateTodo={this.updateTodo} />
      );
    } else {
      result = (
        <div className="Todo">
          <span
            className={this.props.todo.completed ? "completed" : ""}
            onClick={this.toggleCompleted}
          >
            {this.props.todo.content}
          </span>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i className="fas fa-pen"></i>
            </button>
            <button onClick={this.handleDelete}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
