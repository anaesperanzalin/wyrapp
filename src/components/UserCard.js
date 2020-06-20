import React from "react";
import {Segment, Header, Grid, Image} from "semantic-ui-react";
import pig from "../components/images/avatars/pig.png"
import monkey from "../components/images/avatars/monkey.png"
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
          Piggy asks: Would you rather...? 
        </Header>

        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src= {pig} />
            </Grid.Column>
            <Grid.Column width={11}>
              <p> Teaser1 </p>
               <button> Go to the poll</button>
               
              
            </Grid.Column>
          </Grid.Row>
        </Grid>

              <Header
                as="h5"
                textAlign="left"
                block
                attached="top"
              >
                Monkey asks: Would you rather...? 
              </Header>

              <Grid divided padded>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Image src= {monkey} />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <p>Teaser2</p> 
                    <button>Go to the poll</button>
                    
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              </Segment.Group>




    )
  }
}

export default UserCard