import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Button, Form, Radio } from "semantic-ui-react";
import {handleSaveQuestionAnswer} from '../Actions/users';

class Question extends Component {
    state={
        value:''
    };

    handleChange= (e,{value})=>this.setState({value});

    handleSubmit =e =>{
        e.preventDefault();
        if(this.state.value !==''){
            const{authedUser, question, handleSaveQuestionAnswer}= this.props;
            handleSaveQuestionAnswer(authedUser, question.id, this.state.value);

        }
    }

  render() {
    const { question } = this.props;
    const disabled = this.state.value===''? true: false;

    const { name, avatar, timestamp, text, id } = question;

    return (
      <div className="ui-container">
          <div className="ui raised segment">
          <Header as="h1" textAlign="left" block attached="top">
              Would you rather...</Header>
              <br/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Radio 
            label={question.optionOne.text} 
            name="radioGroup"
            value= "optionOne"
            checked={this.state.value ==='optionOne'}
            onChange={this.handleChange}
            
            />
            <br/>
            <br/>

            <p> OR </p>
            <br/>
            <br/>

            <Radio 
            label={question.optionTwo.text} 
            name = "radioGroup"
            value = "optionTwo"
            checked={this.state.value==='optionTwo'}
            onChange={this.handleChange}
            />
            
            
             <br/>
             <br/>
             <br/>
            <Button 
            color="blue"
            size="tiny"
            disabled={disabled}
            >
            Submit

            </Button>

          </Form.Field>
        </Form>
        </div> 
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    users,
    question,
  };
}

export default connect(mapStateToProps)(Question);