import React from "react";

import  CalculatorStore  from '../stores/CalculatorStore';

import ScreenCalc from './Calculator/ScreenCalc';
import BtnCalc from './Calculator/BtnCalc';

export default class Calculator extends React.Component {
  constructor() {
    super();
    // initialize state of app
    this.state = {
      currentResult: 0,
      output: CalculatorStore.getOutput()
    }
  }

  updateOutput(val){
    // const output = this.state.output + val;
    this.setState = {
      output: "sfd"
    };
  }

  // sum function
  sum(num){
    const sum = this.state.currentResult + num;
    this.setState({ currentResult: sum });
  }

  render() {
    const btnsList = [
    "AC","CE","%","/",7,8,9,"x",4,5,6,"-",1,2,3,"+",0,".","="].map((val, i) => {
      if(val === "+")
        return <BtnCalc value={val} key={i} isPlusBtn={true} updateOutput={this.updateOutput.bind(this)}/>
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
