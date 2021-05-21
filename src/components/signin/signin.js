import React from "react";
import { TextField, Button, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(0, 0, 0, 0.3)",
  },
  inputFeild: {
    display: "block",
    margin: "20px auto",
  },
}));

function SignIn() {
  const classes = useStyles();

  return (
    <form>
      <h1> {"Sign in"} </h1>
      <p> {"Welcome"}</p>
      <TextField
        className={classes.inputFeild}
        fullWidth
        id="standard-basic"
        label="ID"
      />
      <TextField
        className={classes.inputFeild}
        fullWidth
        id="standard-basic"
        type="password"
        label="Password"
      />
      <div style={{ textAlign: "center" }}>
        <span style={{ padding: 1 + "em" }}>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <a>{"Stay signed in"}</a>
        </span>
        <Button variant="contained" color="primary">
          Sign in
        </Button>
      </div>
    </form>
  );
}

export default SignIn;
