import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="flex items-center">
        <span className="mr-5 font-bold">{this.state.count}</span>
        <button
          className="bg-red-600 text-white rounded-full text-3xl p-3"
          onClick={() => this.setState({ count: this.state.count + 1})}
        >
          +
        </button>
      </div>
    );
  }
}
