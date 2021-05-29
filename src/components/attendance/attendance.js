import React from "react";
import * as m from "@material-ui/core";
import * as i from "@material-ui/icons";
import * as l from "@material-ui/lab";

function AttendanceHeader() {}

const attendanceSheet = {
  Compilers: [false, true, false, true, true, false],
};

function Attendance() {
  const Subject_name = "Compilers";
  const studentsAttendance = [
    {
      id: 318180196,
      name: "Abdullah Amr Sobh",
      weeks: [true, true, true, false, false, true, true],
    },
    {
      id: 318180896,
      name: "Sara Magdy",
      weeks: [true, true, true, false, true, true, false],
    },
    {
      id: 318180996,
      name: "Mirette Ehab",
      weeks: [false, false, true, false, false, true, true],
    },
    {
      id: 318180006,
      name: "Yehia Khaled",
      weeks: [true, true, true, true, false, true, true],
    },
    {
      id: 318180236,
      name: "Soha Amgad",
      weeks: [true, true, true, true, false, true, true],
    },
    {
      id: 318180116,
      name: "Omina Sobhy",
      weeks: [true, true, false, true, false, true, true],
    },
  ];

  return (
    <>
      <m.TableContainer>
        <m.Table>
          <m.TableHead stickyHeader aria-label="sticky table">
            <h1>{Subject_name}</h1>
            <m.TextField
              id="outlined-required"
              label="Search for Student"
              variant="outlined"
              width={1 / 2}
            />
          </m.TableHead>
          <m.TableRow>
            <m.TableCell> {"ID"} </m.TableCell>
            <m.TableCell> {"Name"} </m.TableCell>
            {studentsAttendance[0].weeks.map((w) => {
              return <m.TableCell> w </m.TableCell>;
            })}
          </m.TableRow>
          <m.TableBody>
            {studentsAttendance.map((row) => {
              return (
                <m.TableRow>
                  <m.TableCell> {row.id} </m.TableCell>
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
      <l.Pagination
        style={{ display: "block", margin: "10px auto" }}
        count={3}
        color="primary"
      />
    </>
  );
}

export default Attendance;
