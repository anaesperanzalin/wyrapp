import React from 'react'
import { Tab } from 'semantic-ui-react'
import UserCard from "./UserCard"


const panes = [
  { menuItem: 'Unanswered', render: () => 
  
  <Tab.Pane>Here we go with the Answered questions 
    <br></br>
    <UserCard></UserCard>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


  </Tab.Pane> },
  { menuItem: 'Answered', render: () => <Tab.Pane>
    
    <br></br>
    woohoooo
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    
    </Tab.Pane> },
  
]

const PollTeaser = () => <Tab panes={panes} 
className= "tab"/>

export default PollTeaser;