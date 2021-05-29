import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import * as c from "@material-ui/core";
import * as i from "@material-ui/icons";

export default function MaterialUIFormSubmit() {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
    root: {
      padding: theme.spacing(3, 2),
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      margin: "10px auto",
      display: "block",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <form>
        <c.Container maxWidth="sm">
          <center>
            <h1> Search </h1>
            <c.TextField
              fullWidth
              label="Please enter the id of the User"
              className={classes.textField}
            />

            <c.TextField
              fullWidth
              label="department"
              className={classes.textField}
            />

            <c.Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              style={{ marginTop: 10 }}
            >
              search <i.SearchOutlined />
            </c.Button>
          </center>
        </c.Container>
        <c.Container maxWidth="sm" style={{marginTop: 20}}>
          <center>
            <c.Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Add lecturer
            </c.Button>
            <c.Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              add students
            </c.Button>
          </center>
        </c.Container>
      </form>
    </>
  );
}
