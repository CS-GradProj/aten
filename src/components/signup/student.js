/*student */

import React from "react";
import * as md from "@material-ui/core";
import * as micons from "@material-ui/icons";

function Student() {
    return (
        <>
          <p>{"Please select a front view photo of the user "}</p>
          
                <md.List style={{ border: "black thin solid", borderRadius: 4 }}>
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
            
        </>
    );
}
export default Student;
