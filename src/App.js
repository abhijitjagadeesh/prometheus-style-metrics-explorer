import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import Theme from "./utils/themes";
import Navbar from "./components/Navbar";
import TextField from "@material-ui/core/TextField";
import ExecuteButton from "./components/ExecuteButton";
import ViewTab from "./components/ViewTab";
import { supportedApis } from "./components/SupportedApis";
import Footer from "./components/Footer";

export const PrometheusContext = React.createContext();

const FullBgStyle = {
  backgroundColor: "#2f3640",
  width: "100%",
  height: "100vh",
};

const useStyles = makeStyles((theme) => ({
  textfield: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(10),
    width: "80%",
  },
  validationFailed: {
    marginLeft: theme.spacing(10),
    color: "#d63031",
  },
  execute: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(10),
  },
}));

function isSupported(val) {
  return supportedApis.indexOf(val) > -1 ? "" : "This API is not supported !";
}

function isEmpty(val) {
  return val.length > 0 ? "" : "Expression field cannot be empty !";
}

function App() {
  const classes = useStyles();
  const [exprValue, SetExprValue] = useState("");
  const [errors, SetErrors] = useState([]);
  const [executeValue, SetExecuteValue] = useState(false);
  const [apiData, SetApiData] = useState("");
  //http://prometheus-control-plane-yes-production.router.techconsole-eks.aws.prod.techconsole.local/api/v1/query_range?query=linear_playback_success_rate_15m&start=1613513145&end=1613514045&step=15
  useEffect(() => {
    if (executeValue) {
      fetch("documents/sample.json")
        // fetch(
        //   "http://prometheus-control-plane-yes-production.router.techconsole-eks.aws.prod.techconsole.local/api/v1/query_range?query=linear_playback_success_rate_15m&start=1613513145&end=1613514045&step=15"
        // )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          handleAPIdata(response);
        });
    }
  }, [executeValue]);

  const handleExprChange = (event) => {
    SetExprValue(event.target.value);
  };

  function validate(validations) {
    SetErrors(validations.map((errorsFor) => errorsFor(exprValue)));
  }

  const handleExecuteClick = () => {
    SetExecuteValue(!executeValue);
    validate([isEmpty, isSupported]);
  };

  const handleAPIdata = (response) => {
    SetApiData(response);
  };

  return (
    <PrometheusContext.Provider
      value={{
        expr: [exprValue, handleExprChange],
        error: errors,
        execute: [executeValue, handleExecuteClick],
        apidata: apiData,
      }}
    >
      <div style={FullBgStyle}>
        <ThemeProvider theme={Theme}>
          <Navbar />
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
          {errors.length > 0 ? (
            <div className={classes.validationFailed}>{errors.join("")}</div>
          ) : null}
          <ExecuteButton />
          <ViewTab />
          <Footer />
        </ThemeProvider>
      </div>
    </PrometheusContext.Provider>
  );
}

export default App;
