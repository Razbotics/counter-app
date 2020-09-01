import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    const val = this.props.counter.value;
    return val === 0 ? "--" : val;
  }

  getBadgeClass() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  renderCount() {
    return (
      <div className="ml-3 mr-1">
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
      </div>
    );
  }

  renderButtons() {
    const { onDelete, onIncrement, onDecrement, counter } = this.props;
    return (
      <div className="col">
        <button onClick={onIncrement} className="btn btn-secondary btn-sm">
          +
        </button>
        <button
          onClick={onDecrement}
          className="btn btn-secondary btn-sm mx-2"
          disabled={counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button onClick={onDelete} className="btn btn-danger btn-sm ">
          Delete
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="row mb-3">
        {this.renderCount()}
        {this.renderButtons()}
      </div>
    );
  }
}

export default Counter;
