import React from "react";
import * as md from "@material-ui/core";

import * as micons from "@material-ui/icons";

function SignUp() {
  const [user, setUser] = React.useState("Student");
  const handleChange = (value) => {
    setUser(value.target.value);
  };

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

        <md.TextField
          id="standard-select-currency"
          select
          label="Select"
          value={user}
          onChange={handleChange}
          helperText="Please select the type of the user"
        >
          <md.MenuItem value="IT"> {"IT"} </md.MenuItem>
          <md.MenuItem value="Teacher"> {"Teacher"} </md.MenuItem>
          <md.MenuItem value="Student"> {"Student"} </md.MenuItem>
        </md.TextField>

        <md.TextField
          style={{ display: "block" }}
          fullWidth
          id="standard-basic"
          label="ID"
          value="ID: 318180196"
          disabled
        />

        <p>{"Please select a front view photo of the user "}</p>
        <center>
          
          <md.Fab color="secondary" style={{ margin: "auto" }}>
            <micons.AddPhotoAlternate />
          </md.Fab>

          <md.List style={{border: "black thin solid", borderRadius: 4}}>
            <md.ListItem>
              <md.ListItemAvatar>
                <md.Avatar>
                  <micons.AddPhotoAlternate />
                </md.Avatar>
              </md.ListItemAvatar>

              <md.ListItemText
                primary="Multimedia"
                secondary="Feb 9, 2021 - Jun 9, 2021"
              />
            </md.ListItem>



            <md.ListItem>
              <md.ListItemAvatar>
                <md.Avatar>
                  <micons.AddPhotoAlternate />
                </md.Avatar>
              </md.ListItemAvatar>

              <md.ListItemText
                primary="Very large integrated circuits"
                secondary="Feb 9, 2021 - Jun 9, 2021"
              />
            </md.ListItem>

            <md.ListItem>
              <md.ListItemAvatar>
                <md.Avatar>
                  <micons.AddPhotoAlternate />
                </md.Avatar>
              </md.ListItemAvatar>

              <md.ListItemText
                primary="Compilers"
                secondary="Feb 9, 2021 - Jun 9, 2021"
              />
            </md.ListItem>


            <md.ListItem>
              <md.ListItemAvatar>
                <md.Avatar>
                  <micons.AddPhotoAlternate />
                </md.Avatar>
              </md.ListItemAvatar>

              <md.ListItemText
                primary="Expert systems"
                secondary="Feb 9, 2021 - Jun 9, 2021"
              />
            </md.ListItem>


            <md.ListItem>
              <md.ListItemAvatar>
                <md.Avatar>
                  <micons.AddOutlined />
                </md.Avatar>
              </md.ListItemAvatar>
            </md.ListItem>

          </md.List>
        </center>

        <md.Button
          style={{ display: "block" }}
          variant="contained"
          color="primary"
        >
          {" "}
          {"submit"}{" "}
        </md.Button>
      </form>
    </>
  );
}

export default SignUp;
