import React from "react";
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

class DropDown extends React.Component{
    render(){
        return(
            <Form>
                <Header as ="h2" color="blue">Sign in</Header>
                <Form.Dropdown
                placeholder="Choose your player"
                selection
                >
        
                </Form.Dropdown>
            </Form>


        )
    
    }

}

export default DropDown;

<select>
            
            <option value="">Choose Your Player</option>
            <option value="1">Dog</option>
            <option value="0">Panda</option>
            <option value="0">Monkey</option>
            <option value="0">Ox</option>
            <option value="0">Elephant</option>
            <option value="0">Pig</option>
            </select>