import React from "react";
import PollTeasers from "../components/PollTeasers";
import NavMenu from "../components/NavMenu"
import PollQuestions from "../components/PollQuestions"
import NewPoll from "../components/NewPoll"
import Leaderboard from "../components/Leaderboard";

class Home extends React.Component {
  render() {
    return(
      
    <div className="container">
        <h1>This is Homepage</h1>
        <NavMenu/>

        <PollTeasers className="ui container"/>


        <PollQuestions className="ui container"/>

        <NewPoll/>
        <br></br>
        <br></br><br></br>
        <br></br>
        <Leaderboard/>
        
    </div>
    )
  }
}

export default Home;
