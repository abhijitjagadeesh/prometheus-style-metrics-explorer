import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { PrometheusContext } from "../App";

const columns = [
  { id: "element", label: "Element", minWidth: 170 },
  { id: "value", label: "Value", minWidth: 100 },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

function TabelView() {
  const classes = useStyles();

  const { apidata, error } = useContext(PrometheusContext);
  const apiData = apidata;
  const errors = error;
  let value = [];
  let avg = "-";
  let element = "no data";
  let timeAndValue = [];

  if (apiData !== "" && errors.join("") === "") {
    timeAndValue = apiData["data"]["result"][0]["values"];
    element = apiData["data"]["result"][0]["metric"]["**name**"];

    timeAndValue.map((eachTimeAndValue) => {
      value.push(eachTimeAndValue[1]);
    });

    var sum = 0;
    for (var i = 0; i < value.length; i++) {
      sum += parseFloat(value[i], 10);
    }

    avg = sum / value.length;
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow tabIndex={-1} key="element">
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.id === "element" ? element : avg}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default TabelView;
