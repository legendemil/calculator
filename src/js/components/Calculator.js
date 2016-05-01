import React from "react";
import ScreenCalc from './Calculator/ScreenCalc';
import BtnCalc from './Calculator/BtnCalc';

export default class Calculator extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id="calculator">
        <ScreenCalc />
        <div id="btns-container">
          <BtnCalc value={"AC"}/>
          <BtnCalc value={"CE"}/>
          <BtnCalc value={"%"}/>
          <BtnCalc value={"/"}/>

          <BtnCalc value={7}/>
          <BtnCalc value={8}/>
          <BtnCalc value={9}/>
          <BtnCalc value={"x"}/>

          <BtnCalc value={4}/>
          <BtnCalc value={5}/>
          <BtnCalc value={6}/>
          <BtnCalc value={"-"}/>

          <BtnCalc value={1}/>
          <BtnCalc value={2}/>
          <BtnCalc value={3}/>
          <BtnCalc value={"+"} isPlusBtn={true}/>

          <BtnCalc value={0}/>
          <BtnCalc value={"."}/>
          <BtnCalc value={"="}/>
        </div>
      </div>
    );
  }
}
