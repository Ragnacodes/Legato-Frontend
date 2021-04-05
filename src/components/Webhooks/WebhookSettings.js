import React from "react";
import { Button, Tab, Tabs } from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import AdvancedSettings from "./AdvancedSettings";
import GeneralSettings from "./GeneralSettings";
import { useState } from "react";
export function TabPanel(props) {
  const { children, value, index, className, ...other } = props;

  return (
    <div
      className={"edit-wh-tab " + className}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

const WebhookSettings = ({ webhook, visible, setVisible, handleSave }) => {
  const [tabValue, setTabValue] = React.useState(0);
  const [info, setInfo] = useState({
    name: webhook.name,
    ip_restrictions: webhook.ip_restrictions ? webhook.ip_restrictions : "",
  });

  const handleChange = (e) => {
    setInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(info);
  };
  return (
    <div>
      <CloseRoundedIcon
        className="close-icon"
        onClick={() => setVisible(false)}
      />
      <Tabs
        value={tabValue}
        onChange={(event, newValue) => setTabValue(newValue)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="General" />
        <Tab label="Advanced" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <GeneralSettings handleChange={handleChange} info={info} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <AdvancedSettings handleChange={handleChange} info={info} />
      </TabPanel>
      <div className="wh-setting-actions">
        <Button autoFocus onClick={() => setVisible(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleSave(info);
            setVisible(false);
          }}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default WebhookSettings;
