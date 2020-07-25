import React from 'react';
import Login from "./login";
import Home from "./home";
import {connect} from 'react-redux';
import {handleInitialData} from '../Actions/shared'

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }


  render() {
    return(
      <div className="App">
        <h1 className="App-header">
        Welcome to the "Would you rather game"!
        </h1>
        <Login/>
        <br></br>
        <br></br>
        <br></br>

        <Home/>
    </div>
      )
    };
};

export default connect() (App)
