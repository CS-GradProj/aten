import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import components
import Profile from "./profile/profile";
import SignIn from "./signin/signin";
import SignUp from "./signup/signup";
import Attendance from "./attendance/attendance"
import StudentFeedback from "./attendance/studentfeedback"
import MaterialUIFormSubmit from "./MaterialUIFormSubmit"

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
        <a href="/attendance"> view attendance </a> <br />
        <a href="/attendance2"> view attendance </a> <br />
        <a href="/submit"> submit </a> <br />
        <Container >
          <div style={appViewStyle}  >
            <Switch>
              <Route path="/" exact component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/profile" component={Profile} />
              <Route path="/Attendance" component={Attendance} />
              <Route path="/attendance2" component={StudentFeedback} />
              <Route path="/submit" component={MaterialUIFormSubmit} />
            </Switch>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
