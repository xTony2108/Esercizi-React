import React from "react";

export class TodoList5 extends React.Component {
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

  handleRemoveButton = (mapItem, mapI) => {
    this.setState((state) => {
      return (state.items = state.items.filter(
        (item, i) => item + i != mapItem + mapI
      ));
    });
  };

  // <TodoList5
  //         render={(state, handleRemoveButton) => {
  //           return state.items.map((items, i) => {
  //             return (
  //               <li key={items + i}>
  //                 <span>{items}</span>
  //                 <button onClick={() => handleRemoveButton(items, i)}>
  //                   Remove
  //                 </button>
  //               </li>
  //             );
  //           });
  //         }}
  //       />

  render() {
    return (
      <div>
        <ul>{this.props.render(this.state, this.handleRemoveButton)}</ul>
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
