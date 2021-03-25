import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { PrometheusContext } from "../App";

const useStyles = makeStyles((theme) => ({
  textfield: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(10),
    width: "80%",
  },
}));

function Expression() {
  const classes = useStyles();
  const { expr } = useContext(PrometheusContext);
  const handleExprChange = expr;
  return (
    <div>
      <TextField
        id="standard-full-width"
        size="medium"
        className={classes.textfield}
        placeholder="Enter expression here"
        margin="normal"
        multiline
        variant="outlined"
        onChange={handleExprChange}
      />
    </div>
  );
}

export default Expression;
