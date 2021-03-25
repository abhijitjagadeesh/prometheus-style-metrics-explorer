import React, { useState, useEffect, useRef } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import DarkTheme from "./utils/DarkTheme";
import LightTheme from "./utils/LightTheme";
import Header from "./components/Header";
import ExecuteButton from "./components/ExecuteButton";
import Expression from "./components/Expression";
import ViewTab from "./components/ViewTab";
import { supportedApis } from "./components/SupportedApis";
import Footer from "./components/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import ModeSelector from "./components/ModeSelector";

export const PrometheusContext = React.createContext();

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

function isSupported(expr) {
  return supportedApis.indexOf(expr) > -1 ? "" : "Metric is not supported !";
}

function isEmpty(expr) {
  return expr.length > 0 ? "" : "Expression field cannot be empty !";
}

function App() {
  const classes = useStyles();
  const [exprValue, SetExprValue] = useState("");
  const [errors, SetErrors] = useState([]);
  const [executeValue, SetExecuteValue] = useState();
  const [apiData, SetApiData] = useState("");
  const [darkMode, SetDarkMode] = useState(true);
  const initialRender = useRef(true);

  useEffect(() => {
    // console.log(errors);
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (errors.join("") === "") {
        fetch(`documents/${exprValue}.json`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            handleAPIdata(response);
          });
      }
    }
  }, [executeValue]);

  const handleExprChange = (event) => {
    console.log(event.target.value);
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

  const handleModeChange = (mode) => {
    SetDarkMode(mode === "dark" ? true : false);
  };

  return (
    <PrometheusContext.Provider
      value={{
        expr: handleExprChange,
        error: errors,
        execute: handleExecuteClick,
        apidata: apiData,
        mode: [darkMode, handleModeChange],
      }}
    >
      <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        <CssBaseline />
        <Header />
        <ModeSelector />
        <Expression />
        <div className={classes.validationFailed}>{errors.join("")}</div>
        <ExecuteButton />
        <ViewTab />
        <Footer />
      </ThemeProvider>
    </PrometheusContext.Provider>
  );
}

export default App;
