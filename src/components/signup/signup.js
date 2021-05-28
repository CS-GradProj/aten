/* signup*/
import React from "react";
import * as md from "@material-ui/core";
import * as i from "@material-ui/icons";

import { makeStyles, withStyles } from '@material-ui/core/styles';

import CheckboxList from "./admin";
import CustomizedSelects from "./teacher";
import Student from "./student";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "10px",
    minWidth: 120
  },
  selectEmpty: {
    marginTop: "10px"
  }
}));

function Draw(props) {
  const adminselect = CheckboxList();
  const teacherselect = CustomizedSelects();
  const studentselsect = Student();

  if (props.props === "admin") {
    return <h1>{adminselect}</h1>;
  } else if (props.props === "teacher") {
    return <>{teacherselect}</>;
  } else {
    return <h1> {studentselsect} </h1>;
  }
}


export default function SignUp() {
  const [user, setUser] = React.useState({ type: "teacher" });
  //const classes = useStyles();

  function handleChange(value) {
    setUser({ type: value.target.value });
  }


  return (
    <>
      <h1>{"Enrollment"}</h1>
      <p>{"Fill in the application, to regiter a new user"}</p>
      <form>
        <md.TextField
          style={{ maxWidth: "33%" }}
          id="standard-basic"
          label="First name"
        />
        <md.TextField
          style={{ maxWidth: "33%" }}
          id="standard-basic"
          label="Middle name"
        />
        <md.TextField
          style={{ maxWidth: "33%" }}
          id="standard-basic"
          label="Last name"
        />

        <md.TextField
          style={{ display: "block" }}
          fullWidth
          id="standard-basic"
          label="Password"
          type="password"
        />

        <md.InputLabel htmlFor="age-native-simple">User Type</md.InputLabel>
        <md.Select
          native
          value={user.type}
          onChange={handleChange}
          inputProps={{
            name: "age"
          }}
        >
          <option aria-label="None" value="" />
          <option value={"teacher"}>Teacher</option>
          <option value={"student"}>Student</option>
          <option value={"admin"}>admin</option>
        </md.Select>

        <md.TextField
          style={{ display: "block" }}
          fullWidth
          id="standard-basic"
          label="ID"
          value="ID: 318180196"
          disabled
        />
        <md.Button
          style={{ display: "block" }}
          variant="contained"
          color="primary"
        >
          {" "}
          {"submit"}{" "}
        </md.Button>
      </form>
      <Draw props={user.type} />
    </>

  );
}

