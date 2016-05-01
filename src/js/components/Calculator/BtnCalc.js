import React from "react";

export default class BtnCalc extends React.Component {
  constructor() {
    super();

  }

  render() {
    let btnPlus = "";
    if(this.props.isPlusBtn) {
      btnPlus = " btn-plus";
    }
    return (
      <div class={"btn-calc" + btnPlus}>
        {this.props.value}
      </div>
    );
  }
}
