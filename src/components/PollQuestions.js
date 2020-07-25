import React, { Component, Fragment } from "react";
import { Header, Button, Form, Radio, Grid } from "semantic-ui-react";
import questions from "../Actions/questions";
import {connect} from 'react-redux';

class PollQuestions extends React.Component {
  render() {
    return (
      <div className="tab">
        <Header as="h1">This is the PollQuestions Component</Header>
        <div className="ui raised segment">
          
          
            <Header as="h1" textAlign="left" block attached="top">
              Would you rather...
            </Header>
            <br />

            <Form>
              <Form.Field>
                <Radio 
                label='option One'
                value="optionOne" />
                <br />
                <br />
                <br />
                <Radio label="option 2" name="radioGroup" value="optionTwo" />
              </Form.Field>
            </Form>
            <br />
            <br />
            <br />
            <div>
              {" "}
              <Button color="blue"> Submit </Button>
            </div>
        </div>
      </div>
    );
  }
}

export default PollQuestions;
