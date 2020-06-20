import React, { Component, Fragment } from "react";
import { Header, Button, Form, Radio } from "semantic-ui-react";

class PollQuestions extends React.Component {
  render() {
    return (
      <div className="tab">
        <Header as="h1">This is the PollQuestions Component ...</Header>
          
        <Fragment>
          <Header as="h1">Would you rather...</Header>
          
          <br />

          <Form>
            <Form.Field>
              <Radio label="option 1" value="optionOne" />
              <br />
              <br />
              <br />
              <Radio label="option 2" name="radioGroup" value="optionTwo" />
            </Form.Field>
          </Form>
        </Fragment>
        <br />
        <br />
        <br />
        <div>
        <Button
        color="blue"
        > Submit </Button>

        </div>
      </div>
    );
  }
}

export default PollQuestions;
