import React from "react";

import  CalculatorStore  from '../stores/CalculatorStore';

import ScreenCalc from './Calculator/ScreenCalc';
import BtnCalc from './Calculator/BtnCalc';

export default class Calculator extends React.Component {
  constructor() {
    super();
    // initialize state of app
    // currentTask - +,-,*,/
    this.state = {
      currentResult: 0,
      currentNumber: '',
      currentTask: '',
      output: ''
    }
  }

  displayNumbers(val, output) {
    switch(val) {
      case "AC":
        this.setState({ 
          output: "",
          currentNumber: '' });
        break;
      case "CE":
        output = output.toString().slice(0,-1);
        this.setState({ output });
        break;
      case "=":
        
        this.calculate(this.state.currentTask);
        output = this.state.currentResult;
        this.setState({ 
          output,
          currentResult: 0,
          currentTask: '' ,
          currentNumber: ''});
        break;
      default:
        output += val;
        this.setState({ output });
        break;
    }
  }

  calculate(task) {
    switch(task) {
      case '+':
        this.sum(this.state.currentNumber);
        break;
    }
  }
  
  // update screen output 
  updateOutput(val){
    let output = this.state.output;
    
    this.displayNumbers(val, output);
    switch(val) {
      case "+":     
        this.setState({
          currentTask: '+'
        });
        const task = this.state.currentTask;
        
        if(task)
          this.calculate(task);
        break;
      case "-":
        
        break;
      case "%":
        
        break;
      case "/":
        
        break;
      case "*":
        
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case '.':
        const currentNumber = this.state.currentNumber + val;
        console.log('curr', currentNumber);
        this.setState({ currentNumber });
        break;
    }
  }

  // sum function
  sum(num){
    num = parseInt(num);
    const sum = parseInt(this.state.currentResult) + num;
    console.log('sum', sum, 'num', num);
    this.setState({ 
      currentResult: sum,
      currentNumber: ''
      });
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
