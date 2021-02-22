import React, { useContext } from "react";
import Plot from "react-plotly.js";
import { PrometheusContext } from "../App";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  plot: {
    width: "80%",
    height: "80%",
  },
}));

function Graph() {
  const classes = useStyles();
  const { apidata, error } = useContext(PrometheusContext);
  const apiData = apidata;
  const errors = error;
  let time = [];
  let value = [];

  if (apiData !== "") {
    let timeAndValue = apiData["data"]["result"][0]["values"];

    timeAndValue.map((eachTimeAndValue) => {
      value.push(eachTimeAndValue[1]);
      time.push(moment(new Date(eachTimeAndValue[0] * 1000)).format());
    });
  }

  return apiData == "" || errors.join("") !== "" ? null : (
    <div>
      <Plot
        data={[
          {
            type: "line",
            x: time,
            y: value,
          },
        ]}
        className={classes.plot}
        useResizeHandler
      />
    </div>
  );
}

export default Graph;
