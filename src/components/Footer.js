import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { IconContext } from "react-icons";
import { SiFacebook } from "react-icons/si";
import { IoMail, IoLogoTwitter } from "react-icons/io5";
import { GoMarkGithub } from "react-icons/go";
import DarkTheme from "../utils/DarkTheme";
import LightTheme from "../utils/LightTheme";
import { PrometheusContext } from "../App";

const footerElementsStyle = {
  paddingRight: 30,
};

function Footer() {
  const { mode } = useContext(PrometheusContext);
  const [darkMode, handleModeChange] = mode;

  const useStyles = makeStyles((theme) => ({
    footer: {
      width: "100%",
      height: "50px",
      position: "fixed",
      bottom: 1,
      backgroundColor: darkMode
        ? DarkTheme.palette.primary.main
        : LightTheme.palette.primary.main,
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography align="center">
        <IconContext.Provider
          value={{
            color: "white",
            size: "4em",
          }}
        >
          <SiFacebook style={footerElementsStyle} />
          <IoLogoTwitter style={footerElementsStyle} />
          <IoMail style={footerElementsStyle} />
          <GoMarkGithub style={footerElementsStyle} />
        </IconContext.Provider>
      </Typography>
    </div>
  );
}

export default Footer;
