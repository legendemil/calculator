import React from "react";

export default class ScreenCalc extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id="screen-calc">
        {this.props.output}
      </div>
    );
  }
}
