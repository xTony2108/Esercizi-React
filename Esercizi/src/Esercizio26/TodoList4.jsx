import React from "react";

export class TodoList4 extends React.Component {
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

  handleResetButton = () => {
    this.setState({ items: [], todo: "" });
  };

  handleRemoveButton = (mapItems) => {
    this.setState((state) => {
      return (state.items = state.items.filter((item) => item != mapItems));
    });
  };

  render() {
    const value = this.state.items.map((items, i) => {
      return (
        <li key={items + i}>
          <span>{items}</span>
          <button onClick={() => this.handleRemoveButton(items)}>Remove</button>
        </li>
      );
    });
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
        <button type="reset" onClick={this.handleResetButton}>
          Reset
        </button>
      </div>
    );
  }
}
