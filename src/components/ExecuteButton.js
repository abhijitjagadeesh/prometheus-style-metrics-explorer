import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { PrometheusContext } from "../App";

const useStyles = makeStyles((theme) => ({
  executeButton: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(10),
  },
}));

function Execute() {
  const classes = useStyles();
  const { execute } = useContext(PrometheusContext);
  const handleExecuteClick = execute;

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        className={classes.executeButton}
        endIcon={<SendIcon />}
        onClick={handleExecuteClick}
      >
        Execute
      </Button>
    </div>
  );
}

export default Execute;
