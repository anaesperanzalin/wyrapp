import React from "react";
import QuestionTab from "../components/QuestionTab";
import {container} from "semantic-ui-react"
import NavMenu from "../components/NavMenu"


class Home extends React.Component {
  render() {
    return(
      
    <div className="container">
        <h1>This is Homepage</h1>
        <NavMenu/>

        <QuestionTab className="ui container"/>
    </div>
    )
  }
}

export default Home;
