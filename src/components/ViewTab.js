import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Graph from "./Graph";
import TabelView from "./TabelView";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  viewTabs: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(10),
    width: "80%",
    backgroundColor: "white",
  },
}));

function ViewTab() {
  const [value, setValue] = React.useState(1);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.viewTabs}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Graph"></Tab>
          <Tab label="Console"></Tab>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Graph />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {<TabelView />}
      </TabPanel>
    </div>
  );
}

export default ViewTab;
