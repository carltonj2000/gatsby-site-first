import React from "react";
import Link from "gatsby-link";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    const color = props.color || "green";
    this.state = { count: 0, color: color };
  }

  onPlus = () => this.setState({count: this.state.count + 1});
  onMinus = () => this.setState({count: this.state.count - 1});

  render() {
    return <div style={{color: this.state.color}}>
      <h1>Counter</h1>
      <p>Count: {this.state.count}</p>
      <button onClick={this.onPlus}>+</button>
      <button onClick={this.onMinus}>-</button>
    </div>
  }
}

export default Counter;
