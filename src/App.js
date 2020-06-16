import React from 'react';
import './App.css';
import Login from "./components/login";
import Home from "./components/home";

class App extends React.Component {
  render() {
    return(
      <div>
        <Login/>
        <Home/>
        
        </div>
      )
    };
}

export default App;
