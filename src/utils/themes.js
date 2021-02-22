import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#003049",
    },
    secondary: {
      main: "#d62828",
    },
    type: "dark",
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: "relative",
        "& $notchedOutline": {
          borderColor: "grey",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#ffffff",
        },
        "&$focused $notchedOutline": {
          borderColor: "#ffffff",
        },
      },
    },
  },
});

export default Theme;
