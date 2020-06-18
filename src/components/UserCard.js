import React from "react";
import {Segment, Header, Grid, Image} from "semantic-ui-react";

class UserCard extends React.Component{
  render(){
    return(
              <Segment.Group>
        <Header
          as="h5"
          textAlign="left"
          block
          attached="top"
        >
          Ana asks: Would you rather...? 
        </Header>

        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src="./components/images/avatar/pig.png" />
            </Grid.Column>
            <Grid.Column width={11}>
               <button> Be a fish </button>
               <button>Be a monkey?</button>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Segment.Group>

    )
  }
}

export default UserCard