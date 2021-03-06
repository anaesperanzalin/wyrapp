import React from "react"
import {
    Segment,
    Header,
    Grid,
    Divider,
    Form,
    Dimmer,
    Loader
  } from 'semantic-ui-react';

export class NewPoll extends React.Component{
    render(){
        return(
          <div className="tab">
            <div>
                <h2>This is the NewPoll component</h2>
                <Segment>
                        <Header as="h2" textAlign="left" block attached="top">
                          Create your own Poll!
                        </Header>
                        <Grid padded>
                          <Grid.Column>
                              <strong>Would you rather...</strong>
                    
                            <Form >
                              <Form.Input
                                id="option1"
                                placeholder="Enter option one..."
                                value=""
                              />
                              <Divider horizontal>Or</Divider>
                              <Form.Input
                                id="option2"
                                placeholder="Enter option two..."
                                value="" 
                              />
                              <Form.Button
                              color="blue">
                                Submit
                              </Form.Button>
                            </Form>
                          </Grid.Column>
                        </Grid>
                  </Segment>
              </div>
         </div>
        )
    }
}

export default NewPoll;