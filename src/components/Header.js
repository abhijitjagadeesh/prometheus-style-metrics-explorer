import React from "react";
import { AppBar, Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  avatar: {
    margin: "10px 1px",
    height: "10%",
    width: "10%",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="primary">
        <Avatar src="./img/synamedia.jpg" className={classes.avatar}></Avatar>
      </AppBar>
    </div>
  );
};

export default Header;
