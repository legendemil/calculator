import React from "react";

export default class Info extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div id="info-box">
			<div>
				Created by Emil Pausz
				<small>The coolest guy in the universe</small>
			</div>
        </div>
    );
  }
}
