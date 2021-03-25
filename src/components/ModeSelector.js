import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { PrometheusContext } from "../App";

function ModeSelector() {
  const { mode } = useContext(PrometheusContext);
  const [darkMode, handleModeChange] = mode;

  const handleChange = (event) => {
    console.log(event.target.value);
    handleModeChange(event.target.value);
  };

  const modeLabel = {
    color: darkMode ? "#FFFFFF" : "#000000",
  };

  const modePosition = {
    float: "right",
    paddingTop: 15,
  };

  return (
    <FormControl style={modePosition}>
      <FormLabel style={modeLabel}>Mode</FormLabel>
      <RadioGroup
        row
        aria-label="mode"
        name="mode"
        defaultValue="dark"
        onChange={handleChange}
      >
        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        <FormControlLabel value="light" control={<Radio />} label="Light" />
      </RadioGroup>
    </FormControl>
  );
}

export default ModeSelector;
