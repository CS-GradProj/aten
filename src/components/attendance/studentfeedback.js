import React from "react";
import * as m from "@material-ui/core";
import * as i from "@material-ui/icons";
import * as l from "@material-ui/lab";

function StudentFeedback() {
  const Subject_name = "Compilers";
  const studentsAttendance = [
    {
      name: "Compilers",
      weeks: [true, true, true, false, false, true, true]
    },
    {
      name: "Very large integrated circuits",
      weeks: [true, true, true, false, true, true, false]
    },
    {
      name: "Multi Media",
      weeks: [false, false, true, false, false, true, true]
    },
    {
      name: "Computer Vision",
      weeks: [true, true, true, true, false, true, true]
    },
    {
      name: "Expert systems",
      weeks: [true, true, true, true, false, true, true]
    },
  ];

  return (
    <>
      <m.TableContainer>
        <m.Table>
          <m.TableHead stickyHeader aria-label="sticky table" > 
          <h1>
             {Subject_name} 
             
             </h1> 

          </m.TableHead>
            <m.TableRow>
              <m.TableCell > {"Name"} </m.TableCell>
              {
                studentsAttendance[0].weeks.map((w)=> {
                  return <m.TableCell> w </m.TableCell>
                })
              }
            </m.TableRow>
          <m.TableBody>
            {studentsAttendance.map((row) => {
              return (
                <m.TableRow>
                  <m.TableCell> {row.name} </m.TableCell>
                  {row.weeks.map((w) => {
                    return (
                      <m.TableCell>{w ? <i.Check /> : <i.Clear />}</m.TableCell>
                    );
                  })}
                </m.TableRow>
              );
            })}
          </m.TableBody>
        </m.Table>
      </m.TableContainer>
    </>
  );
}

export default StudentFeedback;
