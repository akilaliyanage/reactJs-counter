import React, { Component } from "react";
class Counter extends Component {
  state = {
      count : 1,
  };
  render() {

    var classes = "badge m-2 badge-";
    classes+= this.state.count === 0 ? "warning" : "primary"


    return (
      <div class="col">
         <span class={classes}>{this.state.count}</span>
        <button class="btn btn-secondary">Increment</button>
      </div>
    );
  }
}

export default Counter;
