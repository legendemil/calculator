import React from "react";

export default class BtnCalc extends React.Component {
  constructor() {
    super();

  }

  handleClick(e) {
    const val = e.target.value;
    this.props.updateOutput(val);
  }

  render() {
    return (
      <input type="button"
             class={"btn-calc"} 
             onClick={this.handleClick.bind(this)} 
             value={this.props.value} />
    );
  }
}
