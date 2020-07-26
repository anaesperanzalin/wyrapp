import React from "react";
import PollTeaser from "./PollTeaser";
import NavMenu from "../components/NavMenu"
import PollQuestions from "../components/PollQuestions"
import NewPoll from "../components/NewPoll"
import Leaderboard from "../components/Leaderboard";
import PollResult from "./PollResult";
import Error from "./Error"
import {connect} from 'react-redux'
import Question from './Question';

class Home extends React.Component {
  render() {
      console.log(this.props)
    return(
      
    <div className="container">
        <h1>This is Homepage</h1>
        <NavMenu/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <PollTeaser className="ui container"/>
        <br/>

        <h3>Here we go! </h3>
        
        {this.props.qids.map((id)=>(
          <ul key={id}>
            <Question id={id}/>
          </ul>
        ))}

        <br/>
        <br/>
        <br/>
        

        <PollQuestions className="ui container"/>
        <br/>
        
        <NewPoll/>
        <br/>
        <br/>
        <br/>
        <br/>


        <PollResult/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <Error/>
        <br/>
        <br/>
        <br/>
        <br/>

    </div>
    )
  }
}

function mapStateToProps({questions}){
  return{
    qids:Object.keys(questions)
      .sort((a,b)=>questions[b.timestamp-questions[a].timestamp])
  }
}

export default connect(mapStateToProps)(Home)


