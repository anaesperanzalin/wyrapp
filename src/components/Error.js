import React, { Component } from "react";
import {Header } from "semantic-ui-react";

export class Error extends Component {
  render() {
    return (
      <div className="tab">
        <div className="ui raised segment">
          <Header as="h3"
            color="red">
            Uh oh. This is a 404 Error
         </Header>
          <p>
            Sorry but there's nothing here. Please use the menu to try again.
          </p>
        </div>
      </div>
    );
  }
}

export default Error;
