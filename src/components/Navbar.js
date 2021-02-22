import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    margin: "10px 1px",
    height: "10%",
    width: "10%",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Avatar src="./img/synamedia.jpg" className={classes.avatar}></Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
