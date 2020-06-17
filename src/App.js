import React from 'react';
import './App.css';
import Login from "./components/login";
import Home from "./components/home";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <h1 className="App-header">
        Welcome to the "Would you rather game!
        </h1>
        <Login/>
        <br></br>
        <br></br>
        <br></br>

        <Home/>
    </div>
      )
    };
}

export default App;
