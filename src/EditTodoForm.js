import React, { Component } from "react";
import "./EditTodoForm.css";

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.todo.content,
      id: this.props.todo.id,
      completed: this.props.todo.completed,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ content: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.state);
  }
  render() {
    return (
      <form className="EditTodoForm" onSubmit={this.handleSubmit}>
        <input
          id="content"
          name="content"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <button>SAVE</button>
      </form>
    );
  }
}

export default EditTodoForm;
