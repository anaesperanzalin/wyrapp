import React from "react";
import animals from "../components/images/avatars/animals.png";
import { setAuthedUser } from "../Actions/authedUser";
import {pig} from "../components/images/avatars/pig.png"
import {dog} from "../components/images/avatars/dog.png"
import {panda} from "../components/images/avatars/panda.png"
import {connect} from 'react-redux';

import {
  Segment,
  Grid,
  Header,
  Image,
  Form,
  Dropdown,
  Loader,
  Dimmer,
  Select,
} from "semantic-ui-react";


const users =[
  {
    id: '1',
    key: 'pig',
    text: 'pig',
    value: 'pig',
    image: { avatar: true, src:'./images/avatars/pig.png' }
  },

  {
    id:'2',
    key: 'dog',
    text: 'dog',
    value: 'dog',
    image: { avatar: true, src: '/images/avatars/dog.png' }
    },

  {
    id:'3',
    key: 'panda',
    text: 'panda',
    value: 'panda',
    image: { avatar: true, src: {panda} }

  },

]

class Login extends React.Component {

  render() {
    return (
      <div className="dropdown">
        <h1 className="Login-header">Welcome to the Would You Rather App</h1>
        <p> Please sign in below </p>
        <img src={animals} alt="text" />
        <a href="https://www.freepik.com/free-photos-vectors/icon">
          Pics from freepik.com
        </a>
        <br/>
        <br/>
        <LoginForm/>
      </div>
    );
  };
}

class LoginForm extends React.Component{
  state={
    value:''
  };

  onChange=(e,{value})=>{
    this.setState({value});
  };
  

  render(){
    const {value} = this.state;

    return(
    <Form onSubmit= {this.handleSubmit}>
     <Form.Dropdown
     placeholder="select a player"
     selection
     fluid
     scrolling
     options= {users}
     value={value}
     required
     onChange={this.onChange}
     

     />
      <button>Sign in</button>
        </Form>

      )
    }
  }

  const ConnectedLoginForm =connect(
    mapStateToProps,
    {setAuthedUser}
    ) (LoginForm);

  function mapStateToProps({users}){
    return {
      users:Object.values(users)
    };
  }
  

export default Login;
