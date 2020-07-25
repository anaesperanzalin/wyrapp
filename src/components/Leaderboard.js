import React, { Component, Fragment } from "react";
import {
  Segment,
  Grid,
  Header,
  Image,
  Label,
  Divider,
  
} from "semantic-ui-react";

class Leaderboard extends Component {

  render() {

    

    return (
      <div>
        <h2>This is the leaderboard component </h2>
        <div className="tab">
        <Fragment>
          <Segment.Group>
            <Label corner="left" icon="star" color="yellow" />
            <Grid divided padded>
              <Grid.Row>
                <Grid.Column width={4} verticalAlign="middle">
                  <Image src= "../components/images/avatar/pig.png"/>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h3" textAlign="left">
                    Piggy asks...
                  </Header>
                  <Grid>
                    <Grid.Column width={12}>Answered questions</Grid.Column>
                    <Grid.Column width={4}>
                      Piggy answered 3 questions
                    </Grid.Column>
                  </Grid>
                  <Divider />
                  <Grid>
                    <Grid.Column width={12}>Created questions</Grid.Column>
                    <Grid.Column width={4}>
                      Piggy created 2 questions}
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
                <Grid.Column width={4} textAlign="center">
                  <Segment.Group>
                    <Header as="h5" block attached="top" content="Score" />
                    <Segment>
                      <Label circular color="yellow" size="big">
                        5
                      </Label>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment.Group>
        </Fragment>
      </div>
      </div>
    );
  }
}

export default Leaderboard;
