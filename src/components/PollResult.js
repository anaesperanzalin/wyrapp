import React from "react";
import {
  Header,
  Grid,
  Image,
  Divider,
  Segment,
  Progress,
  Label,
  Button,
  Icon,
} from "semantic-ui-react";

class PollResult extends React.Component {
  render() {
    const YourVoteLabel = () => (
      <Label color="yellow" ribbon="right" className="vote">
        <Icon name="check circle outline" size="big" className="compact" />
        <div style={{ float:"left" }}>
          Your
          <br />
          Vote
        </div>
      </Label>
    );

    return (
      <div className="container">
        <div className="tab">
          <h2>This is the PollResults Component</h2>
          
              <Grid divided padded>
                <Grid.Row>
                  <Grid.Column width={"14"}>
                    <div>
                      <Header as="h2" textAlign="left" block attached="top">
                        Would you rather...
                      </Header>
                      <br />
                    </div>
                    <Grid>
                      <Grid.Column width="10">
                        (Your vote) Be a monkey
                        <YourVoteLabel />

                      </Grid.Column>

                      <Grid.Column width="3">3/5</Grid.Column>
                    </Grid>
                    <Divider />
                    <Grid>
                      <Grid.Column width="10">Be a fish</Grid.Column>
                      <Grid.Column width="3">2/5</Grid.Column>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            
        </div>
      </div>
    );
  }
}

export default PollResult;
