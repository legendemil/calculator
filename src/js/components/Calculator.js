import React from "react";
import ReactDOM from 'react-dom';
import ScreenCalc from './Calculator/ScreenCalc';
import BtnCalc from './Calculator/BtnCalc';
import Info from './Calculator/Info';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      output: ''
    }
    this.infoBox = {
      box: null,
      isHidden: true
    };
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
  
  showInfoBox(){
    const isHidden = this.infoBox.isHidden;
    if(!this.infoBox.box)
      this.infoBox.box = ReactDOM.findDOMNode(this.refs.infoBox);
    this.infoBox.isHidden = !isHidden;

    TweenLite.to(this.infoBox.box, .8, {
      opacity: isHidden ? 1 : 0,
      display: isHidden ? "block" : "none"
    });
    
    
  }


  render() {
    const btnsList = [
    "AC","CE","%","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","=","?"].map((val, i) => {
      
      if(val === "?")
        return <BtnCalc value={val} key={i} showInfoBox={this.showInfoBox.bind(this)}/>
      return <BtnCalc value={val} key={i} updateOutput={this.updateOutput.bind(this)}/>
    });

    return (
      <div id="calculator">
        <ScreenCalc output={this.state.output}/>
        <div id="btns-container">
          {btnsList}
        </div>
        <Info ref='infoBox'/>
      </div>
    );
  }
}
