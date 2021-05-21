import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import components
import Profile from "./profile/profile";
import SignIn from "./signin/signin";
import SignUp from "./signup/signup";

import { Container } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";

const appViewStyle = {
  margin: "0 auto",
  border: "solid thin rgba(0, 0, 0, 0.3)",
  borderRadius: 5,
  padding: 20,
  background: "white",
};

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <CssBaseline />
        <a href="/"> sign-in </a> <br />
        <a href="/signup"> sign-up </a> <br />
        <a href="/profile"> view profile </a> <br />
        <Container maxWidth="sm">
          <div style={appViewStyle}  >
            <Switch>
              <Route path="/" exact component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/profile" component={Profile} />
              <Route component={SignIn} />
            </Switch>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
