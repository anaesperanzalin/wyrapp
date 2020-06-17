import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Answered', render: () => 
  
  <Tab.Pane>Here we go with the Answered questions 
    <br></br>
    woohoooo
    <br></br>
    <br></br>
    <br></br>
    <br></br>


  </Tab.Pane> },
  { menuItem: 'Unanswered', render: () => <Tab.Pane>
    Here we go with the Unanswered questions
    <br></br>
    woohoooo
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    
    </Tab.Pane> },
  
]

const QuestionTab = () => <Tab panes={panes} 
className= "tab"/>

export default QuestionTab;