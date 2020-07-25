import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Header, Button, Form, Radio} from 'semantic-ui-react'

class Question extends Component{
    render(){
        const {question} = this.props
        
        const  {
            name, avatar, timestamp, text, id
        }= question



        return(
            <div className='question'>
                
                
               <Header> Would you rather... </Header>
                   
                <p>
                {question.optionOne.text} 
                ...or... 
                {question.optionTwo.text}

                    </p>   
            </div>



        );
    };

}

function mapStateToProps({authedUser, users, questions}, {id}){
    const question = questions[id]
        
    return{
        authedUser,
        users,
        question
    }
}

export default connect(mapStateToProps)(Question)