import React from "react";

export class TodoList extends React.Component {
  state = {
    todo: "",
    items: [],
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ todo: value });
  };

  handleAddButton = () => {
    this.setState((state) => {
      return (
        (this.state.items = [...state.items, state.todo]),
        (this.state.todo = "")
      );
    });
  };

  render() {
    const value = this.state.items.map((items, i) => (
      <li key={items + i}>{items}</li>
    ));
    return (
      <div>
        <ul>{value}</ul>
        <input
          type="text"
          name="item"
          value={this.state.todo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddButton}>Add</button>
      </div>
    );
  }
}
