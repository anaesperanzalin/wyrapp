import React from "react";
import animals from "../components/images/avatars/animals.png";
import { setAuthedUser } from "../Actions/authedUser";

import {
  Segment,
  Grid,
  Header,
  Image,
  Form,
  Loader,
  Dimmer,
  Select,
} from "semantic-ui-react";

class Login extends React.Component {
  state = {
    loading: false,
  };
  handleLoading = () => {
    this.setState({ loading: true });
  };

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
    

  render(){

    return(
    <Form>
     <Form.Dropdown
     placeholder="select a player"
     selection
     scrolling

     />
      <button>Sign in</button>
        </Form>

      )
    }
  }




export default Login;
