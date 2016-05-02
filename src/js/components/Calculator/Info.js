import React from "react";

export default class Info extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div id="info-box">
			<div>
				<h2>Created by Emil Pausz</h2>
				<h4>The coolest guy in the universe</h4>
				<img src="https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/12744127_841844065961582_426815726320577333_n.jpg?oh=485591603dddacb5b782bee01321ac51&oe=57B27E3E" alt="author"/>
				<h3>This app is build with React JS.</h3>
			</div>
        </div>
    );
  }
}
