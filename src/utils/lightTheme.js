import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: "#003049",
    // },
    // tabelHeader: {
    //   main: "#FFFFFF",
    // },
    // secondary: {
    //   main: "#d62828",
    // },
    // background: {
    //   default: "#2f3640",
    //   width: "100%",
    //   height: "100vh",
    // },
    footerIcon: {
      color: "Black",
      size: "4em",
      paddingRight: 30,
      paddingTop: 10,
    },
    type: "light",
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: "relative",
        "& $notchedOutline": {
          borderColor: "grey",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "grey",
        },
        "&$focused $notchedOutline": {
          borderColor: "grey",
        },
      },
    },
  },
});

export default Theme;
