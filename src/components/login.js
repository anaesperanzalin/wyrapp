import React from "react";
import animals from "../components/images/avatars/animals.png";
import SelectAnimal from "../components/SelectAnimal";

import {
    Segment,
    Grid,
    Header,
    Image,
    Form,
    Loader,
    Dimmer,
    Select
  } from 'semantic-ui-react';

class Login extends React.Component{

    render(){
    return(
    <div className="dropdown">
        <h1 className="Login-header">This is the login component hahaa</h1>
        <p> Please sign in below </p>
        <img src= {animals} alt="text"/>
        <a href="https://www.freepik.com/free-photos-vectors/icon"></a>
       
    
        <div className=".dropdown-content ">
        <form>
        <select>
            
            <option value="">Choose Your Player</option>
            <option value="1">Dog</option>
            <option value="0">Panda</option>
            <option value="0">Monkey</option>
            <option value="0">Ox</option>
            <option value="0">Elephant</option>
            <option value="0">Pig</option>
            </select>

            </form>   
            <br></br>
            <br></br>
            <br></br>
            <button className="login-btn">Login</button>
            </div>
   </div>
    );
};
};




export default Login
