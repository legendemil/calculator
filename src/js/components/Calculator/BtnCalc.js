import React from "react";

export default class BtnCalc extends React.Component {
  constructor() {
    super();

  }

  handleClick(e) {
    const val = e.target.value;
    console.log(val);
    this.props.updateOutput(val);
  }

  render() {
    let btnPlus = "";
    if(this.props.isPlusBtn) {
      btnPlus = " btn-plus";
    }
    return (
      <input type="button"
             class={"btn-calc" + btnPlus} 
             onClick={this.handleClick.bind(this)} 
             value={this.props.value} />
    );
  }
}
