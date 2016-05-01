import React from "react";
import Calculator from './Calculator';

export default class Layout extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className='container'>
        <Calculator />
      </div>
    );
  }
}
