import React from "react";

import ScreenCalc from './Calculator/ScreenCalc';
import BtnCalc from './Calculator/BtnCalc';
import Info from './Calculator/Info';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      output: ''
    }
  }

  displayResult(val, output) {
    switch(val) {
      case "AC":
        this.setState({ output: ""});
        break;
      case "CE":
        output = output.toString().slice(0,-1);
        this.setState({ output });
        break;
      case "=":
        this.calculate();
        break;
      case "?":

        break;
      default:
        output += val;
        this.setState({ output });
        break;
    }
  }

  calculate() {
    const output = eval(this.state.output);
    this.setState({ output });
  }
  
  // update screen output 
  updateOutput(val){
    let output = this.state.output;   
    this.displayResult(val, output);    
  }



  render() {
    const btnsList = [
    "AC","CE","%","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","=","?"].map((val, i) => {

      return <BtnCalc value={val} key={i} updateOutput={this.updateOutput.bind(this)}/>
    });
  

    return (
      <div id="calculator">
        <ScreenCalc output={this.state.output}/>
        <div id="btns-container">
          {btnsList}
        </div>
      </div>
    );
  }
}
