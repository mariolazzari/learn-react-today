import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }

  changeCount(amount) {
    this.setState(prevState => ({
      count: prevState.count + amount,
    }));
  }

  render() {
    return (
      <>
        <button onClick={() => this.changeCount(-1)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCount(1)}>+</button>
      </>
    );
  }
}