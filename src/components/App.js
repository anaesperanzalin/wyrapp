import React, { Fragment } from "react";
import Login from "./login";
import Home from "./home";
import { connect } from "react-redux";
import { handleInitialData } from "../Actions/shared";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Grid } from "semantic-ui-react";
import NavMenu from "./NavMenu";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;

    return (
      <Router>
        <div className="App">
        {authedUser === null ?(
          <Route 
            render = {()=> (
              <ContentGrid>
                <Login/>
              </ContentGrid>
            )}/>
        ):(
          <ContentGrid>
            <Route exact path="/home"
            component={Home}/>
              </ContentGrid>)
        }
      <Home/>
        </div>
      </Router>
    );
  }
}

const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={2} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 600 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps({authedUser}){
  return{
    authedUser
  };
}

export default connect(
  mapStateToProps,
 
)(App);
