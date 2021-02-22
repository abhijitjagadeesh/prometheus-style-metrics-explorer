import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { IconContext } from "react-icons";
import { SiFacebook } from "react-icons/si";
import { IoMail, IoLogoTwitter } from "react-icons/io5";
import { GoMarkGithub } from "react-icons/go";
import Theme from "../utils/themes";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "50px",
    position: "fixed",
    bottom: 1,
    backgroundColor: Theme.palette.primary.main,
  },
}));

const footerElementsStyle = {
  paddingRight: 30,
  paddingTop: 10,
};

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography align="center">
        <IconContext.Provider
          value={{
            color: "white",
            size: "2em",
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
