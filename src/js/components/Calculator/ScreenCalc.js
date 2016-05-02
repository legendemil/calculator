import React from "react";

export default class ScreenCalc extends React.Component {
  constructor() {
    super();
    this.output = "";
  }

  render() {
    this.output = this.props.output;
    return (
      <div id="screen-calc">
        {this.output}
      </div>
    );
  }
}
